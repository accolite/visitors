/**
 * 
 */
package com.accolite.visitors.service;

import java.util.List;
import java.util.Map;

import com.accolite.visitors.bo.VisitorBO;
import com.accolite.visitors.enums.VisitorSearchCriteria;
import com.accolite.visitors.exception.VisitorNotFoundException;

/**
 * @author Lavanya
 *
 */
public interface VisitorService {

	/**
	 * @param visitorBO
	 * @return
	 */
	public VisitorBO createVisitor(VisitorBO visitorBO);

	/**
	 * returns visitors between startDate and endDate order by DateTime descending
	 * 
	 * @param startDate
	 * @param endDate
	 * @return
	 */
	public List<VisitorBO> getVisitorsByInTime(String startDate, String endDate);

	/**
	 * update exit/out time of the visitor
	 * 
	 * @param id
	 * @param exitTime
	 * @return
	 * @throws VisitorNotFoundException
	 */
	public boolean exitVisitor(String id, Long exitTime) throws VisitorNotFoundException;

	/**
	 * @return
	 */
	public List<VisitorBO> getVisitors();

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
	public List<VisitorBO> searchVisitor(Map<VisitorSearchCriteria, Object> searchParams);

}
