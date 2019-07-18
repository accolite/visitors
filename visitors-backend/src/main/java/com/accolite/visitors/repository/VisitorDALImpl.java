package com.accolite.visitors.repository;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.match;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.newAggregation;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;
import java.util.Arrays;
import java.util.Date;
import java.util.Map;
import java.util.Optional;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperationContext;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.query.Update;

import com.accolite.visitors.enums.VisitorStatus;
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

}
