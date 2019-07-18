package com.accolite.visitors.repository;

import java.util.Optional;

import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;

public interface VisitorDAL {

	long updateEndTime(String id);
	
	long addVisit(String id, VisitSummary visitor);
	
	public Optional<Visitor> findByEmailId(String email);

}
