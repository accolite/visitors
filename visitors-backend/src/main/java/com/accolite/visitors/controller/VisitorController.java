package com.accolite.visitors.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.SortDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.visitors.enums.VisitorSearchCriteria;
import com.accolite.visitors.model.CustomPage;
import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;
import com.accolite.visitors.service.VisitorService;

/**
 * @author Lavanya
 *
 */
@RestController
@RequestMapping(value = "/api-dev/visitor")
//@CrossOrigin(origins = "*")
public class VisitorController {

	@Autowired
	private VisitorService visitorService;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	private static final int DEFAULT_PAGE_NUMBER = 0;
	private static final int DEFAULT_PAGE_SIZE = 10;

	/**
	 * Fetch the visitors detail by emaiIid
	 * 
	 * @param email
	 * @return
	 */
	@GetMapping(value = "/email/{email}")
	public ResponseEntity<?> getVisitorByEmail(@PathVariable("email") String email) {

		Visitor visitor = visitorService.getVisitorByEmail(email);
		return new ResponseEntity<Visitor>(visitor, HttpStatus.OK);
	}

	/**
	 * Create new Visitor
	 * 
	 * @param requestData
	 * @return
	 */
	@PostMapping(value = "/create")
	public ResponseEntity<Visitor> createVisitor(@Valid @RequestBody Visitor requestData) {

		Visitor visitor = visitorService.createVisitor(requestData);
		return new ResponseEntity<Visitor>(visitor, HttpStatus.OK);
	}

	/**
	 * Adding another visit for the particular Visitor
	 * 
	 * @param requestData
	 * @param id
	 * @return
	 */
	@PutMapping(value = "/addVisitSummary/{id}")
	public ResponseEntity<Visitor> addVisitSummary(@Valid @RequestBody VisitSummary visitSummary,
			@PathVariable("id") String id) {
		visitorService.addVisitSummary(id, visitSummary);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	/**
	 * update visit based on visit number for the particular visitor
	 * 
	 * @param requestData
	 * @param id
	 * @return
	 */
	@PutMapping(value = "/updateVisitSummary/{id}")
	public ResponseEntity<Visitor> updateVisitSummary(@Valid @RequestBody VisitSummary visitSummary,
			@PathVariable("id") String id) {

		visitorService.updateVisitSummary(id, visitSummary);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	/**
	 * Update the exit Time
	 * 
	 * @param id
	 * @return
	 */
	@PutMapping(value = "/exit/{id}")
	public ResponseEntity<Boolean> exitVisitor(@PathVariable("id") String id,
			@Valid @RequestBody Map<String, String> requestData) {

		visitorService.exitVisitor(id, requestData);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	/**
	 * Update visitor details.
	 * 
	 * @param id
	 * @param visitorMap
	 * @return
	 * @throws IllegalAccessException
	 */
	@PatchMapping(value = "/updateVisitorDetails/{id}")
	public ResponseEntity<Visitor> updateVisitorDetails(@PathVariable("id") String id,
			@RequestBody Map<String, Object> visitorMap) throws IllegalAccessException {

		visitorService.updateVisitorDetails(id, visitorMap);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	/**
	 * @deprecated
	 * @return
	 */
	@Deprecated
	@GetMapping(value = "/")
	public ResponseEntity<List<Visitor>> getVisitors() {

		List<Visitor> visitors = visitorService.getVisitors();
		return new ResponseEntity<List<Visitor>>(visitors, HttpStatus.OK);
	}

	/**
	 * Get Visitor Details by ID.
	 * 
	 * @param id
	 * @return
	 */
	@GetMapping(value = "/{id}")
	public ResponseEntity<Visitor> getVisitorById(@PathVariable("id") String id) {

		Visitor visitor = visitorService.getVisitorById(id);
		return new ResponseEntity<Visitor>(visitor, HttpStatus.OK);
	}

	/**
	 * 
	 * TODO: To be removed. Visitors will never be deleted.
	 * 
	 * @deprecated
	 * @param id
	 * @return
	 */
	@Deprecated
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Boolean> deleteVisitor(@PathVariable("id") String id) {

		boolean status = visitorService.deleteVisitor(id);
		return new ResponseEntity<Boolean>(status, HttpStatus.OK);
	}

	/**
	 * TODO: Implement it properly.
	 * 
	 * @param startDate
	 * @param endDate
	 * @return
	 */
	// date in MM/DD/YYYY format
	@GetMapping(value = "/getVisitorsByInTime")
	public ResponseEntity<List<Visitor>> getVisitorsByInTime(@RequestParam("startDate") Date startDate,
			@RequestParam(value = "endDate", required = false) Date endDate) {
		List<Visitor> visitors = visitorService.getVisitorsByInTime(startDate, endDate);
		return new ResponseEntity<List<Visitor>>(visitors, HttpStatus.OK);
	}

	/**
	 * Gets all the visitors without visitor summary.
	 * 
	 * TODO:Add search parameters.
	 * 
	 * @param searchParams
	 * @param pageable
	 * @return
	 */
	@PostMapping(value = "/search")
	public ResponseEntity<CustomPage> searchVisitors(@RequestBody Map<VisitorSearchCriteria, Object> searchParams,
			@PageableDefault(page = DEFAULT_PAGE_NUMBER, size = DEFAULT_PAGE_SIZE) @SortDefault(sort = "visitSummary.inTime", direction = Sort.Direction.DESC) Pageable pageable) {
		CustomPage visitorPage = visitorService.searchVisitors(searchParams, pageable);
		return new ResponseEntity<>(visitorPage, HttpStatus.OK);
	}

	@PostMapping(value = "/sendApprovalMail")
	public ResponseEntity<String> sendApprovalMail(@RequestBody Visitor visitor) {
		JSONObject approval = visitorService.sendApprovalMail(visitor);
		if (approval.has("fail")) {
			approval.remove("fail");
			return new ResponseEntity<String>(approval.toString(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<String>(approval.toString(), HttpStatus.OK);
	}

	@PostMapping(value = "/sendNotifyMail")
	public ResponseEntity<String> sendNotifyMail(@RequestBody Visitor visitor) {
		JSONObject notification = visitorService.sendNotifyMail(visitor);
		if (notification.has("fail")) {
			notification.remove("fail");
			return new ResponseEntity<String>(notification.toString(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<String>(notification.toString(), HttpStatus.OK);
	}

	@GetMapping(value = "/approvalResponse", params = { "visitorId", "visitNumber", "visitorEmail", "approval",
			"remarks" })
	public ResponseEntity<String> approvalResponse(@RequestParam("visitorId") String visitorId,
			@RequestParam("visitNumber") String visitNumber, @RequestParam("visitorEmail") String visitorEmail,
			@RequestParam("approval") String approval, @RequestParam("remarks") String remarks) {
		logger.debug("approvalResponse:::  visitorId:" + visitorId + " visitNumber:" + visitNumber + " approval:"
				+ approval + " remarks:" + remarks + " visitorMail:" + visitorEmail);

		JSONObject approvalResponse = visitorService.approvalResponse(visitorId, visitNumber, approval, remarks,
				visitorEmail);
		if (approvalResponse.has("fail")) {
			approvalResponse.remove("fail");
			return new ResponseEntity<String>(approvalResponse.toString(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<String>(approvalResponse.toString(), HttpStatus.OK);
	}

	@GetMapping(value = "/notifyResponse", params = { "visitorId", "visitNumber", "visitorEmail", "approval",
			"remarks" })
	public ResponseEntity<String> notifyResponse(@RequestParam("visitorId") String visitorId,
			@RequestParam("visitNumber") String visitNumber, @RequestParam("visitorEmail") String visitorEmail,
			@RequestParam("approval") String approval, @RequestParam("remarks") String remarks) {
		logger.debug("notifyResponse::: visitorId:" + visitorId + " visitNumber:" + visitNumber + " niticed:" + approval
				+ " remarks: " + remarks + "visitorMail: " + visitorEmail);

		JSONObject notifyResponse = visitorService.notifyResponse(visitorId, visitNumber, approval, remarks,
				visitorEmail);
		if (notifyResponse.has("fail")) {
			notifyResponse.remove("fail");
			return new ResponseEntity<String>(notifyResponse.toString(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<String>(notifyResponse.toString(), HttpStatus.OK);
	}

	@PostMapping(value = "/approveOnBehalf")
	public ResponseEntity<String> approveOnBehalf(@RequestBody Visitor visitor) {

		visitorService.approveOnBehalf(visitor);
		return new ResponseEntity<String>("Approved !", HttpStatus.OK);
	}

}
