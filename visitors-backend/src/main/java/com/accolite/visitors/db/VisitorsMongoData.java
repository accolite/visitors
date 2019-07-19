package com.accolite.visitors.db;

import static org.springframework.data.mongodb.core.query.Criteria.where;

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
		if (modifiedCount>0) 
			return true;
		
		return false;
	}
}