package com.accolite.visitors.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.data.domain.Pageable;

import com.accolite.visitors.enums.VisitorSearchCriteria;
import com.accolite.visitors.exception.VisitorNotFoundException;
import com.accolite.visitors.model.CustomPage;
import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;

/**
 * @author Lavanya
 *
 */
public interface VisitorService {

	/**
	 * Search for visitor by email Id
	 * 
	 * @param emailId
	 * @return
	 * @throws VisitorNotFoundException
	 */
	public Visitor getVisitorByEmail(String email) throws VisitorNotFoundException;

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
	 * @param requestData
	 * @param exitTime
	 * @throws VisitorNotFoundException
	 */
	public void exitVisitor(String id, Map<String, String> requestData) throws VisitorNotFoundException;

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
	// public List<Visitor> searchVisitor(Map<VisitorSearchCriteria, Object>
	// searchParams);

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
	public void addVisitSummary(String id, VisitSummary visitSummary) throws VisitorNotFoundException;

	/**
	 * 
	 * @param id
	 * @param visitorMap
	 * @throws IllegalAccessException
	 */
	public void updateVisitorDetails(String id, Map<String, Object> visitorMap) throws IllegalAccessException;

	/**
	 * @param id
	 * @param visitSummary
	 */
	public void updateVisitSummary(String id, VisitSummary visitSummary);

	/**
	 * 
	 * Search Visitors based on search filters.
	 * 
	 * @param searchParams
	 * @param pageable
	 * @return
	 */
	public CustomPage searchVisitors(Map<VisitorSearchCriteria, Object> searchParams, Pageable pageable);

	/**
	 * 
	 * @param visitorApprovalData
	 * @return
	 */
	public JSONObject sendApprovalMail(Visitor visitorApprovalData);

	/**
	 * 
	 * @param visitorApprovalData
	 * @return
	 */
	public JSONObject sendNotifyMail(Visitor visitorApprovalData);

	/**
	 * 
	 * @param visitorId
	 * @param visitNumber
	 * @param approval
	 */
	public JSONObject approvalResponse(String visitorId, String visitNumber, String approval,String remarks, String visitorMail);

	/**
	 * 
	 * @param visitorId
	 * @param visitNumber
	 * @param niticed
	 */
	public JSONObject notifyResponse(String visitorId, String visitNumber, String niticed, String remarks,String visitorMail);

}
