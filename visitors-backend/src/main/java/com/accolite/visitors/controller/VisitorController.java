package com.accolite.visitors.controller;

import java.util.List;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.visitors.exception.VisitorNotFoundException;
import com.accolite.visitors.model.Visitor;
import com.accolite.visitors.service.VisitorService;

/**
 * @author Lavanya
 *
 */
@RestController
@RequestMapping(value = "/api/visitor")
public class VisitorController {

	@Autowired
	private VisitorService visitorService;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@PostMapping(value = "/create")
	public ResponseEntity<Visitor> createVisitor(@Valid @RequestBody Visitor requestData) {
		Visitor visitor = visitorService.createVisitor(requestData);
		return new ResponseEntity<Visitor>(visitor, HttpStatus.OK);
	}

	// date in MM/DD/YYYY format
	@GetMapping(value = "/getVisitorsByInTime")
	public ResponseEntity<List<Visitor>> getVisitorsByInTime(@RequestParam("startDate") String startDate,
			@RequestParam(value = "endDate", required = false) String endDate) {
		List<Visitor> list = visitorService.getVisitorsByInTime(startDate, endDate);
		return new ResponseEntity<List<Visitor>>(list, HttpStatus.OK);
	}

	// exitTime in milliseconds (epoch) format
	@PutMapping(value = "/exit/{id}")
	public ResponseEntity<Boolean> exitVisitor(@PathVariable("id") String id,
			@RequestParam(value = "exitTime", required = false) Long exitTime) {
		boolean exit = false;
		try {
			exit = visitorService.exitVisitor(id, exitTime);
		} catch (VisitorNotFoundException e) {
			return new ResponseEntity<Boolean>(exit, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Boolean>(exit, HttpStatus.OK);
	}

	@GetMapping(value = "/")
	public ResponseEntity<List<Visitor>> getVisitors() {
		List<Visitor> visitors = visitorService.getVisitors();
		return new ResponseEntity<List<Visitor>>(visitors, HttpStatus.OK);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Boolean> deleteVisitor(@PathVariable("id") String id) {
		boolean status = visitorService.deleteVisitor(id);
		return new ResponseEntity<Boolean>(status, HttpStatus.OK);
	}

}
