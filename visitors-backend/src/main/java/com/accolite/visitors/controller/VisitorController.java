package com.accolite.visitors.controller;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.visitors.bo.VisitorBO;
import com.accolite.visitors.enums.VisitorSearchCriteria;
import com.accolite.visitors.exception.VisitorNotFoundException;
import com.accolite.visitors.model.Visitor;
import com.accolite.visitors.service.VisitorService;

/**
 * @author Lavanya
 *
 */
@RestController
@RequestMapping(value = "/api-dev/visitor")
@CrossOrigin(origins = "*")
public class VisitorController {

	@Autowired
	private VisitorService visitorService;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@PostMapping(value = "/create")
	public ResponseEntity<VisitorBO> createVisitor(@Valid @RequestBody VisitorBO requestData) {
		VisitorBO visitorBO = visitorService.createVisitor(requestData);
		return new ResponseEntity<VisitorBO>(visitorBO, HttpStatus.OK);
	}

	// date in MM/DD/YYYY format
	@GetMapping(value = "/getVisitorsByInTime")
	public ResponseEntity<List<VisitorBO>> getVisitorsByInTime(@RequestParam("startDate") String startDate,
			@RequestParam(value = "endDate", required = false) String endDate) {
		List<VisitorBO> visitors = visitorService.getVisitorsByInTime(startDate, endDate);
		return new ResponseEntity<List<VisitorBO>>(visitors, HttpStatus.OK);
	}

	// exitTime in milliseconds (epoch) format
	@PutMapping(value = "/exit/{id}")
	public ResponseEntity<Boolean> exitVisitor(@PathVariable("id") String id,
			@RequestParam(value = "exitTime", required = false) Long exitTime) {
		boolean exit = visitorService.exitVisitor(id, exitTime);
		return new ResponseEntity<Boolean>(exit, HttpStatus.OK);
	}

	@GetMapping(value = "/")
	public ResponseEntity<List<VisitorBO>> getVisitors() {
		List<VisitorBO> visitors = visitorService.getVisitors();
		return new ResponseEntity<List<VisitorBO>>(visitors, HttpStatus.OK);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Boolean> deleteVisitor(@PathVariable("id") String id) {
		boolean status = visitorService.deleteVisitor(id);
		return new ResponseEntity<Boolean>(status, HttpStatus.OK);
	}

	@PostMapping(value = "/search")
	public ResponseEntity<List<VisitorBO>> searchVisitor(
			@Valid @RequestBody Map<VisitorSearchCriteria, Object> searchParams) {
		List<VisitorBO> visitors = visitorService.searchVisitor(searchParams);
		return new ResponseEntity<List<VisitorBO>>(visitors, HttpStatus.OK);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Visitor> getVisitorById(@PathVariable("id") String id) {
		Visitor visitor = null;
		visitor = visitorService.getVisitorById(id);
		return new ResponseEntity<Visitor>(visitor, HttpStatus.OK);
	}

}
