package com.accolite.visitors.repository;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.group;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.match;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.newAggregation;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.project;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.sort;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.unwind;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperationContext;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.ArrayOperators;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;

import com.accolite.visitors.enums.VisitorSearchCriteria;
import com.accolite.visitors.enums.VisitorStatus;
import com.accolite.visitors.model.CustomPage;
import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;

public class VisitorDALImpl implements VisitorDAL {

	@Autowired
	private MongoTemplate mongoTemplate;

	@Override
	public long updateEndTime(String id, Map<String, String> requestData) {

		Update update = new Update();
		update.set("visitSummary.$.outTime", new Date());
		update.set("visitSummary.$.status", VisitorStatus.COMPLETED);
		update.set("visitSummary.$.remarks", requestData.get("remarks"));
		long visitNumber = Long.parseLong(requestData.get("visitNumber"));

		return mongoTemplate
				.updateFirst(query(where("id").is(id).andOperator(where("visitSummary.visitNumber").is(visitNumber))),
						update, Visitor.class)
				.getModifiedCount();
	}

	@Override
	public long addVisitSummary(String id, VisitSummary visitSummary) {

		Update update = new Update();
		update.addToSet("visitSummary", visitSummary);

		return mongoTemplate.updateFirst(query(where("id").is(id)), update, Visitor.class).getModifiedCount();
	}

	@Override
	public Optional<Visitor> findByEmailId(String email) {

		Aggregation aggregation = newAggregation(match(where("emailId").is(email)), new AggregationOperation() {

			@Override
			public Document toDocument(AggregationOperationContext context) {

				Document document = new Document("$addFields", new Document("visitSummary",
						Arrays.asList(new Document("$arrayElemAt", Arrays.asList("$visitSummary", -1)))));
				return document;
			}
		});

		AggregationResults<Visitor> result = mongoTemplate.aggregate(aggregation, Visitor.class, Visitor.class);

		return Optional.ofNullable(result.getUniqueMappedResult());
	}

	@Override
	public long updateVisitorDetails(String id, Map<String, Object> visitorMap) throws IllegalAccessException {

		Update update = new Update();
		visitorMap.forEach((a, b) -> update.set(a, b));
		return mongoTemplate.updateFirst(query(where("id").is(id)), update, Visitor.class).getModifiedCount();
	}

	@Override
	public long updateVisitSummary(String id, VisitSummary visitSummary) {

		Update update = new Update();
		update.set("visitSummary.$", visitSummary);

		return mongoTemplate.updateFirst(
				query(where("id").is(id)
						.andOperator(where("visitSummary.visitNumber").is(visitSummary.getVisitNumber()))),
				update, Visitor.class).getModifiedCount();
	}

	@Override
	public CustomPage searchVisitors(Map<VisitorSearchCriteria, Object> searchParams, Pageable pageable) {
		Criteria visitorCriteria = new Criteria();
		Criteria visitSummaryCriteria = new Criteria();
		if (searchParams != null) {
			for (Entry<VisitorSearchCriteria, Object> entry : searchParams.entrySet()) {
				Object value = entry.getValue();
				String key = entry.getKey().toString();
				switch (entry.getKey()) {
				case firstName:
				case lastName:
				case emailId:
				case idNumber:
					visitorCriteria = visitorCriteria.and(key).regex("^" + value, "i");
					break;
				case phoneNumber:
				case idType:
				case visitorType:
					visitorCriteria.and(key).is(value);
					break;
				case comingFrom:
				case contactPerson:
				case purpose:
					visitSummaryCriteria.and("visitSummary." + key).regex("^" + value, "i");
					break;
				case status:
				case officeLocation:
					visitSummaryCriteria.and("visitSummary." + key).is(value);
					break;
				case inTime:
					LocalDate inTime = LocalDate.parse(value.toString());
					visitSummaryCriteria.andOperator(where("visitSummary.inTime").gte(inTime),
							where("visitSummary.inTime").lt(inTime.plusDays(1)));
					break;
				default:
					break;
				}
			}
		}
		List<AggregationOperation> aggregationList = new ArrayList<>();
		aggregationList.add(match(visitorCriteria.andOperator(visitSummaryCriteria)));
		aggregationList.add(unwind("visitSummary"));
		aggregationList.add(match(visitSummaryCriteria));
		if (pageable.getSort().isSorted())
			aggregationList.add(sort(pageable.getSort()));
		aggregationList.add(group().count().as("total").addToSet(pageable.getPageNumber()).as("pageNumber")
				.addToSet(pageable.getPageSize()).as("pageSize").push("$$ROOT").as("data"));
		aggregationList.add(project().andInclude("pageSize", "pageNumber", "total").and(ArrayOperators.Slice
				.sliceArrayOf("data").offset((int) pageable.getOffset()).itemCount(pageable.getPageSize())).as("data"));
		CustomPage page = mongoTemplate.aggregate(newAggregation(aggregationList), Visitor.class, CustomPage.class)
				.getUniqueMappedResult();
		if (page == null) {
			page = new CustomPage();
			page.setTotal(0);
			page.setPageNumber(pageable.getPageNumber());
			page.setPageSize(pageable.getPageSize());
		}
		return page;
	}

}
