package com.accolite.visitors.controller;

import java.util.Date;
import java.util.List;

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

import com.accolite.visitors.exception.VisitorNotFoundException;
import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;
import com.accolite.visitors.service.VisitorService;

/**
 * @author Lavanya
 *
 */
@RestController
@RequestMapping(value = "/api-dev/visitor")
@CrossOrigin(origins = "http://visitors-dev.accolitelabs.com")
public class VisitorController {

	@Autowired
	private VisitorService visitorService;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@PostMapping(value = "/create")
	public ResponseEntity<Visitor> createVisitor(@Valid @RequestBody Visitor requestData) {
		Visitor visitor = visitorService.createVisitor(requestData);
		return new ResponseEntity<Visitor>(visitor, HttpStatus.OK);
	}
	
	@GetMapping(value = "/")
	public ResponseEntity<List<Visitor>> getVisitors() {
		List<Visitor> visitors = visitorService.getVisitors();
		return new ResponseEntity<List<Visitor>>(visitors, HttpStatus.OK);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Visitor> getVisitorById(@PathVariable("id") String id) {
		Visitor visitor = null;
		try {
			visitor = visitorService.getVisitorById(id);
			return new ResponseEntity<Visitor>(visitor, HttpStatus.OK);
		} catch (VisitorNotFoundException e) {
			return new ResponseEntity<Visitor>(visitor, HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Boolean> deleteVisitor(@PathVariable("id") String id) {
		boolean status = visitorService.deleteVisitor(id);
		return new ResponseEntity<Boolean>(status, HttpStatus.OK);
	}
	
	// exitTime in milliseconds (eposch) format
	@PutMapping(value = "/exit/{id}")
	public ResponseEntity<Boolean> exitVisitor(@PathVariable("id") String id) {
		try {
			boolean exit = visitorService.exitVisitor(id, new Date());
			return new ResponseEntity<Boolean>(exit, HttpStatus.OK);
		} catch (VisitorNotFoundException e) {
			return new ResponseEntity<Boolean>(Boolean.FALSE, HttpStatus.NOT_FOUND);
		}
	}
	
	// date in MM/DD/YYYY format
	@GetMapping(value = "/getVisitorsByInTime")
	public ResponseEntity<List<Visitor>> getVisitorsByInTime(@RequestParam("startDate") Date startDate,
			@RequestParam(value = "endDate", required = false) Date endDate) {
		List<Visitor> visitors = visitorService.getVisitorsByInTime(startDate, endDate);
		return new ResponseEntity<List<Visitor>>(visitors, HttpStatus.OK);
	}
	
	@PutMapping(value = "/addVisit/{id}")
	public ResponseEntity<Visitor> addVisit(@Valid @RequestBody VisitSummary requestData,
			@PathVariable("id") String id){
		
		try {
			visitorService.addVisit(id, requestData);
		} catch (VisitorNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	
	/*
	@PostMapping(value = "/search")
	public ResponseEntity<List<VisitorBO>> searchVisitor(
			@Valid @RequestBody Map<VisitorSearchCriteria, Object> searchParams) {
		List<VisitorBO> visitors = visitorService.searchVisitor(searchParams);
		return new ResponseEntity<List<VisitorBO>>(visitors, HttpStatus.OK);
	}*/

}
