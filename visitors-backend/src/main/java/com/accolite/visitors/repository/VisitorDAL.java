package com.accolite.visitors.repository;

import java.util.Map;
import java.util.Optional;

import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;

public interface VisitorDAL {

	long updateEndTime(String id, Map<String, String> requestData);
	
	long addVisitSummary(String id, VisitSummary visitor);
	
	public Optional<Visitor> findByEmailId(String email);
	
	/**
	 * 
	 * @param id
	 * @param visitorMap
	 * @return
	 * @throws IllegalAccessException 
	 */
	public long updateVisitorDetails(String id, Map<String, Object> visitorMap) throws IllegalAccessException;

}
