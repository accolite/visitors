package com.accolite.visitors.db;

import static org.springframework.data.mongodb.core.query.Criteria.where;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import com.accolite.visitors.model.Visitor;

@Component
public class VisitorsMongoData {

	@Autowired
	private MongoTemplate mongoTemplate;

	public static final String COLLECTION_NAME = "visitor";

	public boolean updateVisitSummaryStatus(String visitorId, int visitNumber, String status) {

		Update update = new Update();
		update.set("visitSummary.$.status", status);
		Query query = new Query(
				where("id").is(visitorId).andOperator(where("visitSummary.visitNumber").is(visitNumber)));
		long modifiedCount = mongoTemplate.updateFirst(query, update, Visitor.class).getModifiedCount();
		if (modifiedCount > 0)
			return true;
		return false;
	}

	public boolean updateVisitSummaryRemarksAndStatus(String visitorId, int visitNumber, String approval,
			String remarks) {

		Query whereQuery = new Query();
		ObjectId id = new ObjectId(visitorId);
		whereQuery.addCriteria(where("_id").is(id)).addCriteria(where("visitSummary.visitNumber").is(visitNumber));

		Visitor findOne = mongoTemplate.findOne(whereQuery, Visitor.class, COLLECTION_NAME);

		Update update = new Update();
		if (findOne.getVisitSummary().get(visitNumber - 1).getRemarks() != null) {
			update.set("visitSummary.$.remarks",
					findOne.getVisitSummary().get(visitNumber - 1).getRemarks() + " | " + remarks);
		} else {
			update.set("visitSummary.$.remarks", remarks);
		}
		update.set("visitSummary.$.status", approval);

		long modifiedCount = mongoTemplate.updateFirst(whereQuery, update, Visitor.class).getModifiedCount();
		if (modifiedCount > 0)
			return true;

		return false;
	}

	public Visitor getVisitorByIdAndVisitNumber(String visitorId, int visitNumber) {

		Query whereQuery = new Query();
		ObjectId id = new ObjectId(visitorId);
		whereQuery.addCriteria(where("_id").is(id)).addCriteria(where("visitSummary.visitNumber").is(visitNumber));

		return mongoTemplate.findOne(whereQuery, Visitor.class, COLLECTION_NAME);
	}

}