package com.accolite.visitors.repository;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.match;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.newAggregation;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.sort;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.unwind;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

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
		Criteria criteria = null;
		Criteria criteriaArray = null;
		for (Entry<VisitorSearchCriteria, Object> entry : searchParams.entrySet()) {

			String value = String.valueOf(entry.getValue());
			switch (entry.getKey()) {
			case firstName:
				if (criteria == null)
					criteria = where("firstName").regex("^" + value + ".*", "i");
				else {
					criteria = criteria.and("firstName").regex("^" + value + ".*", "i");
				}
				break;
			case lastName:
				if (criteria == null)
					criteria = where("lastName").regex("^" + value + ".*", "i");
				else {
					criteria = criteria.and("lastName").regex("^" + value + ".*", "i");
				}
				break;
			case emailId:
				if (criteria == null)
					criteria = where("emailId").regex("^" + value + ".*", "i");
				else {
					criteria = criteria.and("emailId").regex("^" + value + ".*", "i");
				}
				break;
			case phoneNumber:
				if (criteria == null) {
					criteria = where("phoneNumber").is(Long.parseLong(value));
				} else {
					criteria.and("phoneNumber").is(Long.parseLong(value));
				}
				break;
			case idType:
				if (criteria == null) {
					criteria = where("idType").is(value);
				} else {
					criteria.and("idType").is(value);
				}
				break;
			case idNumber:
				if (criteria == null) {
					criteria = where("idNumber").regex("^" + value + ".*", "i");
				} else {
					criteria.and("idNumber").regex("^" + value + ".*", "i");
				}
				break;
			case visitorType:
				if (criteria == null) {
					criteria = where("visitorType").is(value);
				} else {
					criteria.and("visitorType").is(value);
				}
				break;
			case comingFrom:
				if (criteria == null) {
					criteria = where("visitSummary.comingFrom").regex("^" + value + ".*", "i");
				} else {
					criteria.and("visitSummary.comingFrom").regex("^" + value + ".*", "i");
				}
				if (criteriaArray == null)
					criteriaArray = where("visitSummary.comingFrom").regex("^" + value + ".*", "i");
				else
					criteriaArray.and("visitSummary.comingFrom").regex("^" + value + ".*", "i");

				break;
			case officeLocation:
				if (criteria == null) {
					criteria = where("visitSummary.officeLocation").is(value);
				} else {
					criteria.and("visitSummary.officeLocation").is(value);
				}
				if (criteriaArray == null)
					criteriaArray = where("visitSummary.officeLocation").is(value);
				else
					criteriaArray.and("visitSummary.officeLocation").is(value);

				break;
			case contactPerson:
				if (criteria == null) {
					criteria = where("visitSummary.contactPerson").regex("^" + value + ".*", "i");
				} else {
					criteria.and("visitSummary.contactPerson").regex("^" + value + ".*", "i");
				}
				if (criteriaArray == null)
					criteriaArray = where("visitSummary.contactPerson").regex("^" + value + ".*", "i");
				else
					criteriaArray.and("visitSummary.contactPerson").regex("^" + value + ".*", "i");

				break;
			case status:
				if (criteria == null) {
					criteria = where("visitSummary.status").is(value);
				} else {
					criteria.and("visitSummary.status").is(value);
				}
				if (criteriaArray == null)
					criteriaArray = where("visitSummary.status").is(value);
				else
					criteriaArray.and("visitSummary.status").is(value);

				break;
			case purpose:
				if (criteria == null) {
					criteria = where("visitSummary.purpose").regex("^" + value + ".*", "i");
				} else {
					criteria.and("visitSummary.purpose").regex("^" + value + ".*", "i");
				}
				if (criteriaArray == null)
					criteriaArray = where("visitSummary.purpose").regex("^" + value + ".*", "i");
				else
					criteriaArray.and("visitSummary.purpose").regex("^" + value + ".*", "i");

				break;
			// TODO:To implement search with date
			case inTime:
				break;
			default:
				break;
			}
		}
		List<AggregationOperation> aggregationList = new ArrayList<>();
		if (criteria != null)
			aggregationList.add(match(criteria));
		aggregationList.add(unwind("visitSummary"));
		if (criteriaArray != null)
			aggregationList.add(match(criteriaArray));
		if (pageable.getSort().isSorted())
			aggregationList.add(sort(pageable.getSort()));
		aggregationList.add(Aggregation.group().count().as("total").addToSet(pageable.getPageNumber()).as("pageNumber")
				.addToSet(pageable.getPageSize()).as("pageSize").push("$$ROOT").as("data"));
		aggregationList.add(Aggregation.project().andInclude("pageSize", "pageNumber", "total").and(ArrayOperators.Slice
				.sliceArrayOf("data").offset((int) pageable.getOffset()).itemCount(pageable.getPageSize())).as("data"));
		Aggregation aggregation = newAggregation(aggregationList);

		return mongoTemplate.aggregate(aggregation, Visitor.class, CustomPage.class).getUniqueMappedResult();
	}

}
