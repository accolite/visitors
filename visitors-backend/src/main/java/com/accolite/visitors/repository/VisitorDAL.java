package com.accolite.visitors.repository;

import com.accolite.visitors.model.VisitSummary;

public interface VisitorDAL {

	long updateEndTime(String id);
	
	long addVisit(String id, VisitSummary visitor);

}
