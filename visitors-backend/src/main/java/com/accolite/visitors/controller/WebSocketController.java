package com.accolite.visitors.controller;

import java.util.Map;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.util.HtmlUtils;

@Controller
public class WebSocketController {

	@Autowired
	private SimpMessagingTemplate template;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@PostMapping("/sendData")
	@ResponseBody
	public String sendMessage(@Valid @RequestBody Map<String, String> map) throws Exception {

		template.convertAndSend("/topic/greetings", "Hello, " + HtmlUtils.htmlEscape(map.get("name")) + "!");
		return "working " + map.get("name");
	}

	@MessageMapping("/topic/greetings")
	// @SendTo("/topic/greetings")
	// @ResponseBody
	public String greeting(String message) throws Exception {
		logger.debug("^^^^^^^^ log-> Message from Client : " + message);
		System.out.println("************Message from Client : " + message);
		return message;
	}
}