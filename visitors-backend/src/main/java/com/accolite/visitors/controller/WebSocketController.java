package com.accolite.visitors.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@MessageMapping("/visit/status")
	public String greeting(String message) throws Exception {

		logger.debug("Message from Client : " + message);
		System.out.println("Message from Client : " + message);
		return message;
	}
}
