package com.accolite.visitors.repository;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;
import static org.springframework.data.mongodb.core.query.Update.update;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Update;

import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;

public class VisitorDALImpl implements VisitorDAL{

	@Autowired
	private MongoTemplate mongoTemplate;
	
	@Override
	public long updateEndTime(String id) {
		return mongoTemplate.updateFirst(query(where("id").is(id).andOperator(where("visitSummary.outTime").is(null))),
				update("visitSummary.$.outTime", new Date()), Visitor.class).getModifiedCount();
		
	}

	@Override
	public long addVisit(String id, VisitSummary visitSummary) {
		Update update = new Update();
		update.addToSet("visitSummary", visitSummary);
		
		return mongoTemplate.updateFirst(query(where("id").is(id)), update, Visitor.class).getModifiedCount();
	}
	
	

}
