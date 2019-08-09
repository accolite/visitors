package com.accolite.visitors.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.accolite.visitors.enums.VisitorSearchCriteria;
import com.accolite.visitors.enums.VisitorStatus;
import com.accolite.visitors.exception.VisitorNotFoundException;
import com.accolite.visitors.model.CustomPage;
import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;
import com.accolite.visitors.repository.VisitorRepository;
import com.accolite.visitors.util.WebSocketHelper;

/**
 * @author Lavanya
 *
 */
@Transactional
@Service
public class VisitorServiceImpl implements VisitorService {

	@Autowired
	private VisitorRepository visitorRepository;

	@Autowired
	private CustomMailService customMailService;

	@Autowired
	private WebSocketHelper webSocketHelper;

	@Override
	public Visitor getVisitorByEmail(String email) throws VisitorNotFoundException {
		return visitorRepository.findByEmailId(email)
				.orElseThrow(() -> new VisitorNotFoundException("Visitor not found."));
	}

	/**
	 * Create new Visitor
	 */
	@Override
	public Visitor createVisitor(Visitor visitor) {

		List<VisitSummary> visitSummary = visitor.getVisitSummary();
		if (visitSummary != null && visitSummary.size() == 1) {
			visitSummary.get(0).setInTime(new Date());
			visitSummary.get(0).setVisitNumber(1);
			visitSummary.get(0).setStatus(VisitorStatus.NEW);
		}
		Visitor visitorResult = visitorRepository.save(visitor);
		webSocketHelper.pushData(visitor, VisitorStatus.NEW);
		if (visitor != null) {
			new Thread(() -> {
				customMailService.sendApprovalMail(visitor);
			}).start();
		}
		return visitorResult;
	}

	@Override
	public Visitor getVisitorById(String id) throws VisitorNotFoundException {
		return visitorRepository.findById(id).orElseThrow(() -> new VisitorNotFoundException("Visitor not found."));
	}

	@Override
	public boolean deleteVisitor(String id) {
		visitorRepository.deleteById(id);
		return Boolean.TRUE;
	}

	@Override
	public void exitVisitor(String id, Map<String, String> requestData) throws VisitorNotFoundException {

		long count = visitorRepository.updateEndTime(id, requestData);
		if (count == 0) {
			throw new VisitorNotFoundException("Visitor not found");
		}

		Visitor visitor = new Visitor();
		visitor.setFirstName(requestData.get("firstName"));
		visitor.setLastName(requestData.get("lastName"));
		webSocketHelper.pushData(visitor, VisitorStatus.COMPLETED);
	}

	@Override
	public void addVisitSummary(String id, VisitSummary visitSummary) throws VisitorNotFoundException {

		visitSummary.setInTime(new Date());
		long count = visitorRepository.addVisitSummary(id, visitSummary);
		if (count == 0) {
			throw new VisitorNotFoundException("Visitor not found");
		}
	}

	@Override
	public void updateVisitSummary(String id, Map<String, Object> visitSummaryMap) throws VisitorNotFoundException {

		visitSummaryMap.put("inTime", new Date());
		long count = visitorRepository.updateVisitSummary(id, visitSummaryMap);
		if (count == 0) {
			throw new VisitorNotFoundException("Visitor not found");
		}
	}

	@Override
	public void updateVisitorDetails(String id, Map<String, Object> visitorMap) throws IllegalAccessException {

		long count = visitorRepository.updateVisitorDetails(id, visitorMap);
		if (count == 0) {
			throw new VisitorNotFoundException("Visitor not found");
		}
	}

	@Override
	public CustomPage searchVisitors(Map<VisitorSearchCriteria, Object> searchParams, Pageable pageable) {

		return visitorRepository.searchVisitors(searchParams, pageable);
	}

	@Override
	public JSONObject sendApprovalMail(Visitor visitor) {

		return customMailService.sendApprovalMail(visitor);
	}

	@Override
	public JSONObject sendNotifyMail(Visitor visitor) {

		return customMailService.sendVisitorArrivalMail(visitor);
	}

	@Override
	public JSONObject approvalResponse(String visitorId, String visitNumber, String approval, String remaarks,
			String visitorEmail) {

		return customMailService.approvalResponse(visitorId, visitNumber, approval, remaarks, visitorEmail);
	}

	@Override
	public JSONObject notifyResponse(String visitorId, String visitNumber, String niticed, String remarks,
			String visitorEmail) {

		return customMailService.approvalResponse(visitorId, visitNumber, niticed, remarks, visitorEmail);
	}

	@Override
	public void approveOnBehalf(Visitor visitor) throws VisitorNotFoundException {

		customMailService.sendApproveOnBehalf(visitor);
	}

}
