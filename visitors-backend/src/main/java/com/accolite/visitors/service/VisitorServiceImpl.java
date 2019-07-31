package com.accolite.visitors.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.catalina.valves.rewrite.Substitution;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ResourceUtils;

import com.accolite.visitors.enums.VisitorSearchCriteria;
import com.accolite.visitors.exception.VisitorNotFoundException;
import com.accolite.visitors.mail.CustomMailService;
import com.accolite.visitors.mail.StrSubstitutor;
import com.accolite.visitors.model.CustomPage;
import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;
import com.accolite.visitors.repository.VisitorRepository;

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
		if (visitor.getVisitSummary() != null && visitor.getVisitSummary().size() == 1) {
			visitor.getVisitSummary().get(0).setInTime(new Date());
			visitor.getVisitSummary().get(0).setVisitNumber(1);
		}
		Visitor visitorResult = visitorRepository.save(visitor);
		if (visitor != null) {
			new Thread(() -> {
				customMailService.sendApprovalMail(visitor);
			}).start();
		}
		return visitorResult;
	}

	/**
	 * Get All the visitors TODO: Need to Implement - Order By
	 */
	@Override
	public List<Visitor> getVisitors() {
		// return visitorDao.findAllByOrderByInTimeDesc();
		return visitorRepository.findAll();
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
	public void updateVisitSummary(String id, VisitSummary visitSummary) throws VisitorNotFoundException {

		visitSummary.setInTime(new Date());
		long count = visitorRepository.updateVisitSummary(id, visitSummary);
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
		JSONObject sendApprovalMail = customMailService.sendApprovalMail(visitor);
		return sendApprovalMail;
	}

	@Override
	public JSONObject sendNotifyMail(Visitor visitor) {
		JSONObject sendNotifyMail = customMailService.sendVisitorArrivalMail(visitor);
		return sendNotifyMail;
	}

	@Override
	public JSONObject approvalResponse(String visitorId, String visitNumber, String approval, String remaarks,
			String visitorEmail) {
		JSONObject approvalResponse = customMailService.approvalResponse(visitorId, visitNumber, approval, remaarks,
				visitorEmail);
		return approvalResponse;
	}

	@Override
	public JSONObject notifyResponse(String visitorId, String visitNumber, String niticed, String remarks, String visitorEmail) {

		JSONObject notifyResponse = customMailService.approvalResponse(visitorId, visitNumber, niticed, remarks, visitorEmail);

		return notifyResponse;
	}
	
	@Override
	//public void approveOnBehalf(String id, VisitSummary visitSummary) throws VisitorNotFoundException {
	public void approveOnBehalf(Visitor visitor) throws VisitorNotFoundException {

		customMailService.sendApproveOnBehalf(visitor);
	}

}
