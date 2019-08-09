package com.accolite.visitors.controller;

import java.util.Map;

import javax.validation.Valid;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.SortDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
public class VisitorController {

	@Autowired
	private VisitorService visitorService;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

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
	@PatchMapping(value = "/updateVisitSummary/{id}")
	public ResponseEntity<Visitor> updateVisitSummary(@Valid @RequestBody Map<String, Object> visitSummaryMap,
			@PathVariable("id") String id) {

		visitorService.updateVisitSummary(id, visitSummaryMap);
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
	 * Gets the visitors based on search filter.
	 * 
	 * @param searchParams
	 * @param pageable
	 * @return
	 */
	@PostMapping(value = "/search")
	public ResponseEntity<CustomPage> searchVisitors(
			@RequestBody(required = false) Map<VisitorSearchCriteria, Object> searchParams,
			@SortDefault(sort = "visitSummary.inTime", direction = Direction.DESC) Pageable pageable) {

		CustomPage visitorPage = visitorService.searchVisitors(searchParams, pageable);
		return new ResponseEntity<>(visitorPage, HttpStatus.OK);
	}

	/**
	 * @param visitor
	 * @return
	 */
	@PostMapping(value = "/sendApprovalMail")
	public ResponseEntity<String> sendApprovalMail(@RequestBody Visitor visitor) {

		JSONObject approval = visitorService.sendApprovalMail(visitor);
		if (approval.has("fail")) {
			approval.remove("fail");
			return new ResponseEntity<String>(approval.toString(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<String>(approval.toString(), HttpStatus.OK);
	}

	/**
	 * @param visitor
	 * @return
	 */
	@PostMapping(value = "/sendNotifyMail")
	public ResponseEntity<String> sendNotifyMail(@RequestBody Visitor visitor) {

		JSONObject notification = visitorService.sendNotifyMail(visitor);
		if (notification.has("fail")) {
			notification.remove("fail");
			return new ResponseEntity<String>(notification.toString(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<String>(notification.toString(), HttpStatus.OK);
	}

	/**
	 * @param visitorId
	 * @param visitNumber
	 * @param visitorEmail
	 * @param approval
	 * @param remarks
	 * @return
	 */
	@GetMapping(value = "/approvalResponse", params = { "firstName", "lastName", "contactPerson", "visitorId",
			"visitNumber", "visitorEmail", "approval", "remarks" })
	public ResponseEntity<String> approvalResponse(@RequestParam("firstName") String firstName,
			@RequestParam("lastName") String lastName, @RequestParam("contactPerson") String contactPerson,
			@RequestParam("visitorId") String visitorId, @RequestParam("visitNumber") String visitNumber,
			@RequestParam("visitorEmail") String visitorEmail, @RequestParam("approval") String approval,
			@RequestParam("remarks") String remarks) {
		logger.debug("approvalResponse:::  visitorId:" + visitorId + " visitNumber:" + visitNumber + " approval:"
				+ approval + " remarks:" + remarks + " visitorMail:" + visitorEmail);

		JSONObject approvalResponse = visitorService.approvalResponse(firstName, lastName, contactPerson, visitorId,
				visitNumber, approval, remarks, visitorEmail);
		if (approvalResponse.has("fail")) {
			approvalResponse.remove("fail");
			return new ResponseEntity<String>(approvalResponse.toString(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<String>(approvalResponse.toString(), HttpStatus.OK);
	}

	/**
	 * @param visitorId
	 * @param visitNumber
	 * @param visitorEmail
	 * @param approval
	 * @param remarks
	 * @return
	 */
	@GetMapping(value = "/notifyResponse", params = { "firstName", "lastName", "contactPerson", "visitorId",
			"visitNumber", "visitorEmail", "approval", "remarks" })
	public ResponseEntity<String> notifyResponse(@RequestParam("firstName") String firstName,
			@RequestParam("lastName") String lastName, @RequestParam("contactPerson") String contactPerson,
			@RequestParam("visitorId") String visitorId, @RequestParam("visitNumber") String visitNumber,
			@RequestParam("visitorEmail") String visitorEmail, @RequestParam("approval") String approval,
			@RequestParam("remarks") String remarks) {

		logger.debug("notifyResponse::: visitorId:" + visitorId + " visitNumber:" + visitNumber + " niticed:" + approval
				+ " remarks: " + remarks + "visitorMail: " + visitorEmail);

		JSONObject notifyResponse = visitorService.notifyResponse(firstName, lastName, contactPerson, visitorId,
				visitNumber, approval, remarks, visitorEmail);
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
