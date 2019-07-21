package com.accolite.visitors.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.accolite.visitors.exception.VisitorNotFoundException;
import com.accolite.visitors.mail.CustomMailService;
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

//	@Autowired
//	private VisitorHelperUtil visitorHelperUtil;

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
	public List<Visitor> getVisitorsByInTime(Date startDate, Date endDate) {
		return visitorRepository.findByVisitSummary_InTimeBetweenOrderByVisitSummary_InTimeDesc(startDate, endDate);
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
	public Page<Visitor> visitorsWithoutSummary(Pageable pageable) {
		return visitorRepository.findAllWithoutSummary(pageable);
	}

	/*
	 * @Override public List<VisitorBO> searchVisitor(Map<VisitorSearchCriteria,
	 * Object> searchParams) { //Set<VisitSummary> visitSummaryList =
	 * visitorHelperUtil.searchVisitors(searchParams); //return
	 * VisitorBOBuilder.buildVisitorBOBySummary(visitSummaryList); return null; }
	 */

	@Override
	public JSONObject sendApprovalMail(Visitor visitor) {
		JSONObject sendApprovalMail = customMailService.sendApprovalMail(visitor);
		return sendApprovalMail;
	}

	@Override
	public JSONObject sendNotifyMail(Visitor visitor) {
		JSONObject sendNotifyMail = customMailService.sendNotifyMail(visitor);
		return sendNotifyMail;
	}

	@Override
	public JSONObject approvalResponse(String visitorId, String visitNumber, String approval) {
		JSONObject approvalResponse = customMailService.approvalResponse(visitorId, visitNumber, approval);
		return approvalResponse;
	}

	@Override
	public JSONObject notifyResponse(String visitorId, String visitNumber, String niticed) {
		JSONObject notifyResponse = customMailService.notifyResponse(visitorId, visitNumber, niticed);
		return notifyResponse;
	}

}
