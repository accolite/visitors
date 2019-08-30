package com.accolite.visitors.service;

import java.util.Map;

import javax.validation.Valid;

import org.json.JSONObject;
import org.springframework.data.domain.Pageable;

import com.accolite.visitors.enums.VisitorSearchCriteria;
import com.accolite.visitors.exception.VisitorNotFoundException;
import com.accolite.visitors.model.CustomPage;
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
	 * @param visitor
	 * @return
	 */
	public Visitor createVisitor(Visitor visitor);

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
	 * delete visitor by id
	 * 
	 * @param id
	 * @return
	 */
	public boolean deleteVisitor(String id);

	/**
	 * @param id
	 * @return
	 * @throws VisitorNotFoundException
	 */
	public Visitor getVisitorById(String id) throws VisitorNotFoundException;

	/**
	 * @param visitor
	 * @return
	 * @throws VisitorNotFoundException
	 */
	public void addVisitSummary(Visitor visitor) throws VisitorNotFoundException;

	/**
	 * 
	 * @param id
	 * @param visitorMap
	 * @throws IllegalAccessException
	 */
	public void updateVisitorDetails(String id, Map<String, Object> visitorMap) throws IllegalAccessException;

	/**
	 * @param id
	 * @param visitSummaryMap
	 */
	public void updateVisitSummary(String id, @Valid Map<String, Object> visitSummaryMap);

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
	 * @param firstName
	 * @param lastName
	 * @param contactPerson
	 * @param visitorId
	 * @param visitNumber
	 * @param approval
	 * @param remarks
	 * @param visitorMail
	 * @param officeLocation
	 * @return
	 */
	public JSONObject approvalResponse(String firstName, String lastName, String contactPerson, String visitorId,
			String visitNumber, String approval, String remarks, String visitorMail, String officeLocation);

	/**
	 * @param firstName
	 * @param lastName
	 * @param contactPerson
	 * @param visitorId
	 * @param visitNumber
	 * @param niticed
	 * @param remarks
	 * @param visitorMail
	 * @param officeLocation
	 * @return
	 */
	public JSONObject notifyResponse(String firstName, String lastName, String contactPerson, String visitorId,
			String visitNumber, String niticed, String remarks, String visitorMail, String officeLocation);

	/**
	 * @param visitor
	 */
	public void approveOnBehalf(@Valid Visitor visitor);

	/**
	 * 
	 */
	public void getAndUpdateUnVisitedScheduledVisits();

	/**
	 * 
	 */
	public void getAndUpdateUnCompletedVisits();

}
