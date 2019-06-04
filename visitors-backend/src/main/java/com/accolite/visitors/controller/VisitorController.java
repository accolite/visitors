package com.accolite.visitors.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	public ResponseEntity<Visitor> createVisitor(@RequestBody Visitor requestData) {
		Visitor visitor = visitorService.createVisitor(requestData);
		return new ResponseEntity<Visitor>(visitor, HttpStatus.OK);
	}
}
