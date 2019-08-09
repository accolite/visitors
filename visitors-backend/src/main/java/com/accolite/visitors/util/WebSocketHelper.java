/**
 * 
 */
package com.accolite.visitors.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import com.accolite.visitors.enums.VisitorStatus;
import com.accolite.visitors.model.VisitSummary;
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

		Map<String, Object> data = constructData(visitor, visitorStatus);
		messagingTemplate.convertAndSend(WEB_SOCKET_SUBSCRIBER, data);
	}

	/**
	 * @param visitor
	 * @param visitorStatus
	 * @return
	 */
	public Map<String, Object> constructData(Visitor visitor, VisitorStatus visitorStatus) {

		Map<String, Object> data = new HashMap<>();
		String message = env.getProperty(visitorStatus.toString());
		String name = visitor.getFirstName() + " " + visitor.getLastName();
		message = message.replace("<VisitorName>", name);
		List<VisitSummary> visitSummary = visitor.getVisitSummary();
		if ((visitSummary != null) && (!visitSummary.isEmpty())) {
			message = message.replace("<ContactPerson>", visitSummary.get(0).getContactPerson());
		}
		data.put("message", message);
		data.put("action", visitorStatus);

		return data;
	}

	@MessageExceptionHandler
	public String handleException(Throwable exception) {

		messagingTemplate.convertAndSend("/errors", exception.getMessage());
		return exception.getMessage();
	}

}
