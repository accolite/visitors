/**
 * 
 */
package com.accolite.visitors.service;

import java.util.List;

import com.accolite.visitors.exception.VisitorNotFoundException;
import com.accolite.visitors.model.Visitor;

/**
 * @author Lavanya
 *
 */
public interface VisitorService {

	/**
	 * @param visitor
	 * @return
	 */
	public Visitor createVisitor(Visitor visitor);

	/**
	 * returns visitors between startDate and endDate order by DateTime descending
	 * 
	 * @param startDate
	 * @param endDate
	 * @return
	 */
	public List<Visitor> getVisitorsByInTime(String startDate, String endDate);

	/**
	 * update exit/out time of the visitor
	 * 
	 * @param id
	 * @param exitTime
	 * @return
	 * @throws VisitorNotFoundException
	 */
	public boolean exitVisitor(String id, long exitTime) throws VisitorNotFoundException;

}
