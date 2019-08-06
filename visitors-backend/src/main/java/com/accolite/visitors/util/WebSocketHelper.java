/**
 * 
 */
package com.accolite.visitors.util;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import com.accolite.visitors.enums.VisitorStatus;
import com.accolite.visitors.model.Visitor;

/**
 * @author Lavanya
 *
 */
@Component
public class WebSocketHelper {

	private static final String WEB_SOCKET_SUBSCRIBER = "/visit/status";

	@Autowired
	private SimpMessagingTemplate messagingTemplate;

	@Autowired
	private Environment env;

	public void pushData(Visitor visitor, VisitorStatus visitorStatus) {

		String message = env.getProperty(visitorStatus.toString());
		Map<String, Object> data = new HashMap<>();
		data.put("message", constructMessage(visitor, message));
		data.put("action", visitorStatus);

		messagingTemplate.convertAndSend(WEB_SOCKET_SUBSCRIBER, data);
	}

	/**
	 * @param visitor
	 * @param message
	 * @return
	 */
	public String constructMessage(Visitor visitor, String message) {

		String name = visitor.getFirstName() + " " + visitor.getLastName();
		String contactPerson = visitor.getVisitSummary().get(0).getContactPerson();
		message = message.replace("<VisitorName>", name);
		message = message.replace("<ContactPerson>", contactPerson);

		return message;
	}

	@MessageExceptionHandler
	public String handleException(Throwable exception) {

		messagingTemplate.convertAndSend("/errors", exception.getMessage());
		return exception.getMessage();
	}

}
