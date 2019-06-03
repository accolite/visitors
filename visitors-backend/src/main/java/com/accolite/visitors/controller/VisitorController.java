package com.accolite.visitors.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

	@GetMapping(value = "/test")
	public String testVisitorAppl() {
		logger.debug("Test visitor application");
		return "Application is working...";
	}

}
