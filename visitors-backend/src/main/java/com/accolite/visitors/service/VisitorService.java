package com.accolite.visitors.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.accolite.visitors.enums.VisitorSearchCriteria;
import com.accolite.visitors.exception.VisitorNotFoundException;
import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;

/**
 * @author Lavanya
 *
 */
public interface VisitorService {

	/**
	 * @param visitorBO
	 * @return
	 */
	public Visitor createVisitor(Visitor visitorBO);

	/**
	 * returns visitors between startDate and endDate order by DateTime descending
	 * 
	 * @param startDate
	 * @param endDate
	 * @return
	 */
	public List<Visitor> getVisitorsByInTime(Date startDate, Date endDate);

	/**
	 * update exit/out time of the visitor
	 * 
	 * @param id
	 * @param exitTime
	 * @return
	 * @throws VisitorNotFoundException
	 */
	public boolean exitVisitor(String id, Date exitTime) throws VisitorNotFoundException;

	/**
	 * @return
	 */
	public List<Visitor> getVisitors();

	/**
	 * delete visitor by id
	 * 
	 * @param id
	 * @return
	 */
	public boolean deleteVisitor(String id);

	/**
	 * @param searchParams
	 * @return
	 */
	//public List<Visitor> searchVisitor(Map<VisitorSearchCriteria, Object> searchParams);

	/**
	 * @param id
	 * @return
	 * @throws VisitorNotFoundException
	 */
	public Visitor getVisitorById(String id) throws VisitorNotFoundException;

	/**
	 * @param id
	 * @return
	 * @throws VisitorNotFoundException
	 */
	public void addVisit(String id, VisitSummary visitSummary) throws VisitorNotFoundException;

}
