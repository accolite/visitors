package com.accolite.visitors.controller;

import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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

	@PostMapping("/sendData")
	@ResponseBody
	public String sendMessage(@Valid @RequestBody Map<String, String> map) throws Exception {

		template.convertAndSend("/topic/greetings", "Hello, " + HtmlUtils.htmlEscape(map.get("name")) + "!");
		return "working " + map.get("name");
	}

}
