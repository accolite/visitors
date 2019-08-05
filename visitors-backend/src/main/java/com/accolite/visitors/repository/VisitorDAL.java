package com.accolite.visitors.repository;

import java.util.Map;
import java.util.Optional;

import org.springframework.data.domain.Pageable;

import com.accolite.visitors.enums.VisitorSearchCriteria;
import com.accolite.visitors.model.CustomPage;
import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;

public interface VisitorDAL {

	/**
	 * @param id
	 * @param requestData
	 * @return
	 */
	public long updateEndTime(String id, Map<String, String> requestData);

	/**
	 * @param id
	 * @param visitor
	 * @return
	 */
	public long addVisitSummary(String id, VisitSummary visitor);

	/**
	 * @param email
	 * @return
	 */
	public Optional<Visitor> findByEmailId(String email);

	/**
	 * 
	 * @param id
	 * @param visitorMap
	 * @return
	 * @throws IllegalAccessException
	 */
	public long updateVisitorDetails(String id, Map<String, Object> visitorMap) throws IllegalAccessException;

	/**
	 * @param id
	 * @param visitSummaryMap
	 * @return
	 */
	public long updateVisitSummary(String id, Map<String, Object> visitSummaryMap);

	/**
	 * @param searchParams
	 * @param pageable
	 * @return
	 */
	public CustomPage searchVisitors(Map<VisitorSearchCriteria, Object> searchParams, Pageable pageable);

}
