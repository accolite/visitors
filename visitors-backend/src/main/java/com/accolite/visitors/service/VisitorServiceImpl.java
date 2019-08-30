package com.accolite.visitors.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

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
import com.accolite.visitors.model.VisitorsView;
import com.accolite.visitors.repository.VisitorRepository;
import com.accolite.visitors.util.DateUtils;
import com.accolite.visitors.util.WebSocketHelper;

import lombok.extern.slf4j.Slf4j;

/**
 * @author Lavanya
 *
 */
@Transactional
@Service
@Slf4j
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

		List<VisitSummary> visitSummaryList = visitor.getVisitSummary();
		boolean isScheduled = populateVisitSummaryDetails(visitSummaryList);
		Visitor visitorResult = visitorRepository.save(visitor);
		if (!isScheduled) {
			webSocketHelper.pushData(visitor, VisitorStatus.NEW);
		}
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
		List<VisitSummary> visitSummaryList = new ArrayList<VisitSummary>();
		VisitSummary visitSummary = new VisitSummary();
		visitSummary.setOfficeLocation(requestData.get("officeLocation"));
		visitSummaryList.add(visitSummary);
		visitor.setVisitSummary(visitSummaryList);
		webSocketHelper.pushData(visitor, VisitorStatus.COMPLETED);
	}

	@Override
	public void addVisitSummary(Visitor visitor) throws VisitorNotFoundException {

		List<VisitSummary> visitSummaryList = visitor.getVisitSummary();
		boolean isScheduled = populateVisitSummaryDetails(visitSummaryList);
		long count = visitorRepository.addVisitSummary(visitor.getId(), visitSummaryList.get(0));
		if (count == 0) {
			throw new VisitorNotFoundException("Visitor not found");
		}
		if (!isScheduled) {
			webSocketHelper.pushData(visitor, VisitorStatus.NEW);
		}
		if (visitor != null) {
			new Thread(() -> {
				customMailService.sendApprovalMail(visitor);
			}).start();
		}
	}

	@Override
	public void updateVisitSummary(String id, Map<String, Object> visitSummaryMap) throws VisitorNotFoundException {

		visitSummaryMap.put("inTime", new Date());
		/* scheduledStartDate and scheduledEndDate should not be updated */
		visitSummaryMap.remove("scheduledStartDate");
		visitSummaryMap.remove("scheduledEndDate");
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
	public JSONObject approvalResponse(String firstName, String lastName, String contactPerson, String visitorId,
			String visitNumber, String approval, String remaarks, String visitorEmail, String officeLocation) {

		return customMailService.approvalResponse(firstName, lastName, contactPerson, visitorId, visitNumber, approval,
				remaarks, visitorEmail, officeLocation);
	}

	@Override
	public JSONObject notifyResponse(String firstName, String lastName, String contactPerson, String visitorId,
			String visitNumber, String niticed, String remarks, String visitorEmail, String officeLocation) {

		return customMailService.approvalResponse(firstName, lastName, contactPerson, visitorId, visitNumber, niticed,
				remarks, visitorEmail, officeLocation);
	}

	@Override
	public void approveOnBehalf(Visitor visitor) throws VisitorNotFoundException {

		customMailService.sendApproveOnBehalf(visitor);
	}

	@Override
	public void getAndUpdateUnVisitedScheduledVisits() {

		List<VisitorsView> visitors = visitorRepository.getUnVisitedScheduledVisits();
		if (visitors.size() > 0) {
			log.info(visitors.size() + " scheduled visitor/visitors has not visited!");
			visitors.stream().filter(Objects::nonNull).forEach(e -> {
				Map<String, Object> map = new HashMap<>();
				map.put("visitNumber", e.getVisitSummary().getVisitNumber());
				map.put("status", VisitorStatus.NOT_VISITED);
				if (visitorRepository.updateVisitSummary(e.getId(), map) > 0) {
					log.info("Updated visit status to " + VisitorStatus.NOT_VISITED + " for " + e.getFirstName());
				}
			});
		}
	}

	@Override
	public void getAndUpdateUnCompletedVisits() {

		List<VisitorsView> visitors = visitorRepository.getUnCompletedVisits();
		if (visitors.size() > 0) {
			log.info(visitors.size() + " visited visitor/visitors has not done the exit process!");
			visitors.stream().filter(Objects::nonNull).forEach(e -> {
				Map<String, Object> map = new HashMap<>();
				map.put("visitNumber", e.getVisitSummary().getVisitNumber());
				map.put("status", VisitorStatus.COMPLETED);
				map.put("outTime", new Date());
				if (visitorRepository.updateVisitSummary(e.getId(), map) > 0) {
					log.info("Updated visit status to " + VisitorStatus.COMPLETED + " for " + e.getFirstName());
				}
			});
		}
	}

	/**
	 * @param visitSummaryList
	 * @return
	 */
	public boolean populateVisitSummaryDetails(List<VisitSummary> visitSummaryList) {

		boolean isScheduled = false;
		if (visitSummaryList != null && visitSummaryList.size() == 1) {
			VisitSummary visitSummary = visitSummaryList.get(0);
			isScheduled = ((visitSummary.getStatus() != null)
					&& (visitSummary.getStatus().equals(VisitorStatus.SCHEDULED)));
			if (!isScheduled) {
				visitSummary.setStatus(VisitorStatus.NEW);
				visitSummary.setInTime(new Date());
			} else {
				Date startDate = visitSummary.getScheduledStartDate();
				Date endDate = visitSummary.getScheduledEndDate();
				startDate = (startDate == null) ? new Date() : startDate;
				endDate = (endDate == null) ? new Date() : endDate;
				visitSummary.setScheduledStartDate(DateUtils.atStartOfDay(startDate));
				visitSummary.setScheduledEndDate(DateUtils.atSpecificTimeOfDay(endDate));
			}
			if (visitSummary.getVisitNumber() == 0) {
				visitSummary.setVisitNumber(1);
			}
		}
		return isScheduled;
	}

}
