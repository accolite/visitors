package com.accolite.visitors.mail;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import com.accolite.visitors.db.VisitorsMongoData;
import com.accolite.visitors.enums.VisitorStatus;
import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;
import com.google.common.io.CharStreams;

@Service
public class CustomMailService {

	@Autowired
	private Environment env;

	@Autowired
	private VisitorsMongoData visitorsMongoData;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	Properties prop = new Properties();
	Session session;
	Map<String, String> valuesMap = new HashMap<>();

	private void configPropertis() {
		prop.put("mail.smtp.host", "smtp.gmail.com");
		prop.put("mail.smtp.port", "587");
		prop.put("mail.smtp.auth", "true");
		prop.put("mail.smtp.starttls.enable", "true");
		String username = env.getProperty("spring.mail.username");
		String password = env.getProperty("spring.mail.password");
		session = Session.getInstance(prop, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		});
	}

	public boolean sendMail(String to, String subject, String content) {
		configPropertis();
		Message message = new MimeMessage(session);
		try {
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
			message.setSubject(subject);
			message.setContent(content, "text/html");
			Transport.send(message);
			return true;
		} catch (MessagingException e) {
			e.printStackTrace();
			logger.info("Execption in sendMain() : " + e.getMessage());
			return false;
		}
	}

	public String readFile(String filePath) {
		try {
			 InputStream resourceAsStream = this.getClass().getClassLoader().getResourceAsStream(filePath);
			 Reader reader = new InputStreamReader(resourceAsStream);
			 String data = CharStreams.toString(reader);			
			return data;
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

	public Map<String, String> mapPlaceHolders(Visitor visitor) {
		Map<String, String> valuesMap = new HashMap<>();
	
		valuesMap.put("appURL", env.getProperty("applicationURL"));
		valuesMap.put("visitor.firstName", String.valueOf(visitor.getFirstName()));
		valuesMap.put("visitor.lastName", String.valueOf(visitor.getLastName()));
		valuesMap.put("visitor.visitSummary.contactPerson", String.valueOf(visitor.getVisitSummary().get(0).getContactPerson()));
		valuesMap.put("visitor.email", String.valueOf(visitor.getEmailId()));
		valuesMap.put("visitor.phone", String.valueOf(visitor.getPhoneNumber()));
		valuesMap.put("visitor.visitSummary.comingFrom",String.valueOf( visitor.getVisitSummary().get(0).getComingFrom()));
		valuesMap.put("visitor.visitSummary.purpose", String.valueOf(visitor.getVisitSummary().get(0).getPurpose()));
		valuesMap.put("visitor.id",String.valueOf( visitor.getId()));
		valuesMap.put("visitor.visitSummary.visitNumber", String.valueOf(visitor.getVisitSummary().get(0).getVisitNumber()));
		valuesMap.put("visitor.visitSummary.inTime", String.valueOf(visitor.getVisitSummary().get(0).getInTime()));
		valuesMap.put("visitor.visitSummary.scheduledTime",String.valueOf(visitor.getVisitSummary().get(0).getScheduledTime()));
		valuesMap.put("visitor.statusDeclined", VisitorStatus.DECLINED.toString());
		valuesMap.put("visitor.statusApproved", VisitorStatus.APPROVED.toString());
		return valuesMap;
	}

	public boolean sendApprovalReqMail(Visitor visitor) {
		String subjectLine = "Visitor Approval Required for " + visitor.getFirstName();
		String fileContent = readFile("approval_request.html");
		//ClassLoader classLoader = getClass().getClassLoader();
		valuesMap.put("responseEndpoint", "approvalResponse");
		StrSubstitutor StrSubstitutor = new StrSubstitutor(valuesMap);
		String mailContent = StrSubstitutor.replace(fileContent);
		if (sendMail(visitor.getVisitSummary().get(0).getContactPersonEmailId(), subjectLine, mailContent)) {
			logger.info(visitor.getVisitSummary().get(0).getContactPersonEmailId()
					+ " is Notified for new visitor request Creation !!");
			visitorsMongoData.updateVisitSummaryRemarksAndStatus(visitor.getId(),
					visitor.getVisitSummary().get(0).getVisitNumber(), VisitorStatus.PENDING.toString(),
					"Approval Mail Sent");
			logger.info("Status Updated to PENDING for visitNumber: "
					+ visitor.getVisitSummary().get(0).getVisitNumber() + " of visitorID: " + visitor.getId() + "!!");
			return true;
		} else {
			logger.info("Unable to Send Approval mail to" + visitor.getVisitSummary().get(0).getContactPersonEmailId()
					+ "  !!");
			visitorsMongoData.updateVisitSummaryRemarksAndStatus(visitor.getId(),
					visitor.getVisitSummary().get(0).getVisitNumber(), VisitorStatus.FAILED.toString(),
					"Unable to send Approval Mail");
			logger.info("Status Updated to Failed for visitNumber: " + visitor.getVisitSummary().get(0).getVisitNumber()
					+ " of visitorID: " + visitor.getId() + "!!");
			return false;
		}
	}

	public boolean sendReqCreationMail(Visitor visitor) {
		boolean status = false;
		String subjectLine = "Visit Request created for " + visitor.getFirstName();
		String fileContent = readFile("v_req_created_notice.html");
		valuesMap.put("responseEndpoint", "approvalResponse");
		StrSubstitutor StrSubstitutor = new StrSubstitutor(valuesMap);
		String mailContent = StrSubstitutor.replace(fileContent);
		if (sendMail(visitor.getVisitSummary().get(0).getContactPersonEmailId(), subjectLine, mailContent)) {
			logger.info(visitor.getVisitSummary().get(0).getContactPersonEmailId()
					+ " is Notified for new visitor request Creation !!");
			status = true;
		} else {
			logger.info("Unable to notify " + visitor.getVisitSummary().get(0).getContactPersonEmailId()
					+ "  for request Creation !!");
			status = false;
		}
		visitorsMongoData.updateVisitSummaryRemarksAndStatus(visitor.getId(),
				visitor.getVisitSummary().get(0).getVisitNumber(), VisitorStatus.SCHEDULED.toString(),
				"Request Created by: " + visitor.getVisitSummary().get(0).getContactPersonEmailId());
		logger.info("Status Updated to SCHEDULED for visitNumber: " + visitor.getVisitSummary().get(0).getVisitNumber()
				+ " of visitorID: " + visitor.getId() + "!!");
		return status;
	}

	public JSONObject sendApprovalMail(Visitor visitor) {// newVisitMail
		logger.info("INSIDE newVisitMail()");
		JSONObject status = new JSONObject();
		valuesMap = mapPlaceHolders(visitor);
		if (visitor.getVisitSummary().get(0).getBadgeNo() == null
				|| visitor.getVisitSummary().get(0).getBadgeNo().isEmpty()) {
			if (!sendReqCreationMail(visitor)) {
				status.put("fail", "true");
				status.put("status", "unable to notify Contact Person via Mail");
			} else {
				status.put("status", "new Visit notification Mail Sent Successfully !!");
			}
		} else {
			if (sendApprovalReqMail(visitor)) {
				status.put("fail", "true");
				status.put("status", "unable to send Approval Mail");
			} else {
				status.put("status", "Approval Mail Sent Successfully !!");
			}
		}

		new Thread(() -> {// notify visitor for his/her visit
			final String sub = "Your visit request created for Accolite office ";
			String fileContent = readFile("notify_to_visitor_req_creation.html");
			StrSubstitutor StrSubstitutor = new StrSubstitutor(valuesMap);
			String mailContent = StrSubstitutor.replace(fileContent);
			if (sendMail(visitor.getEmailId(), sub, mailContent))
				logger.info(visitor.getFirstName() + " is updated for his/her visit @ Accolite" + "!!");
			else
				logger.info("unable to send notification mail to visitor :" + visitor.getFirstName() + " !!");
		}).start();
		return status;
	}

	public JSONObject approvalResponse(String visitorId, String visitNumber, String approval, String remarks,
			String visitorEmail) {
		JSONObject response = new JSONObject();
		String status = "Unable to Update Status for visitorId: " + visitorId + " visitNumber: " + visitNumber
				+ " approval: " + approval + "remarks: " + remarks + "remarks: " + visitorEmail;
		if (visitorsMongoData.updateVisitSummaryRemarksAndStatus(visitorId, Integer.parseInt(visitNumber), approval,
				remarks)) {
			logger.info("Status Updated to " + approval + " for visit number:" + visitNumber + "of visitorID :"
					+ visitorId + "remarks" + remarks + "!!");
			status = "Your Response is Recorded,  Thank you !!";

			new Thread(() -> { // update visitor for his/her visit status
				final String sub = "Update for your visit @ Accolite office ";
				final String msg = "<p>Your vsit request is <strong>" + approval + "<br /> Comments:" + remarks
						+ "</strong><br /><br /><br /><br /> this is a system generated mail please do not reply to this mail !<br /> Thank you for visiting @ Accolite";
				if (sendMail(visitorEmail, sub, msg)) {
					logger.info(visitorEmail + " is updated for his/her visit @ Accolite" + "!!");
				}
			}).start();
		}
		response.put("status", status);
		return response;
	}

	public JSONObject sendVisitorArrivalMail(Visitor visitor) {

		logger.info("INSIDE sendVisitorArrivalMail()");
		JSONObject status = new JSONObject();
	valuesMap = mapPlaceHolders(visitor);
		valuesMap.put("responseEndpoint", "notifyResponse");

		String subjectLine = "Visitor " + visitor.getFirstName() + " is waiting at Reception";
		String fileContent = readFile("visitor_arrival_notification.html");
		StrSubstitutor StrSubstitutor = new StrSubstitutor(valuesMap);
		String mailContent = StrSubstitutor.replace(fileContent);
		if (sendMail(visitor.getVisitSummary().get(0).getContactPersonEmailId(), subjectLine, mailContent)) {
			logger.info(visitor.getVisitSummary().get(0).getContactPersonEmailId()
					+ " is Notified for new visitor's Arrival !!");
			visitorsMongoData.updateVisitSummaryRemarksAndStatus(visitor.getId(),
					visitor.getVisitSummary().get(0).getVisitNumber(), VisitorStatus.PENDING.toString(),
					"Arrival notification Mail Sent");
			logger.info("Status Updated to PENDING for visitNumber: "
					+ visitor.getVisitSummary().get(0).getVisitNumber() + " of visitorID: " + visitor.getId() + "!!");
			
			new Thread(() -> {// notify Visitor
				final String sub = "Your POC " + visitor.getVisitSummary().get(0).getContactPerson()
						+ " has been notified for your visit @ Accolite office ";
				final String msg = "<p>Dear <strong>" + visitor.getFirstName() + "</strong> Your POC  <strong>"
						+ visitor.getVisitSummary().get(0).getContactPerson()
						+ "</strong> has been notified for your visit @ Accolite Office <br /> we will get back to you shortly!<br /><br /><br /><br /> this is a system generated mail please do not reply to this mail !<br /><br /> Thank you for visiting @ Accolite";
				if (sendMail(visitor.getEmailId(), sub, msg)) {
					logger.info(visitor.getFirstName() + " is updated for his/her visit @ Accolite" + "!!");
				}

			}).start();
			return status.put("status", "POC notified for visitor Arrival !!");
		} else {
			visitorsMongoData.updateVisitSummaryRemarksAndStatus(visitor.getId(),
					visitor.getVisitSummary().get(0).getVisitNumber(), VisitorStatus.FAILED.toString(),
					"Unable to send visitor Arrival notification Mail");
			logger.info("Status Updated to FAILED for visitNumber: " + visitor.getVisitSummary().get(0).getVisitNumber()
					+ " of visitorID: " + visitor.getId() + "!!");
			status.put("fail", "true");
			status.put("status", "unable to send Approval Mail");
			return status;
		}

	}

	public void notifyVisitor(String to, String subject, String Content) {

	}

	public void sendApproveOnBehalf(Visitor visitor) {
		VisitSummary visitSummary=visitor.getVisitSummary().get(0);
		String subjectLine = "One Visitor Request Approved on Behalf of You" ;
		String fileContent = readFile("approval_on_behalf.html");
		visitor.setVisitSummary(Arrays.asList(visitSummary));
		valuesMap.put("responseEndpoint", "approvalResponse");
		valuesMap = mapPlaceHolders(visitor);
		StrSubstitutor StrSubstitutor = new StrSubstitutor(valuesMap);
		String mailContent = StrSubstitutor.replace(fileContent);
		if (sendMail(visitSummary.getContactPersonEmailId(), subjectLine, mailContent)) {
			logger.info(visitSummary.getContactPersonEmailId()
					+ " is Notified for Approval on behalf of him/her !!");
		} else {
			logger.info(visitSummary.getContactPersonEmailId()
					+ " is unable to Notified for Approval on behalf of him/her !!");
		}
		String remarks="Approved on behalf of POC";
		if(visitSummary.getRemarks()!=null && ! visitSummary.getRemarks().isEmpty()) {
			remarks=visitSummary.getRemarks();
		}
		visitorsMongoData.updateVisitSummaryRemarksAndStatus(visitor.getId(),
				visitor.getVisitSummary().get(0).getVisitNumber(), VisitorStatus.APPROVED.toString(),
				remarks);

		logger.info("Status Updated to APPROVED for visitNumber: "
				+ visitor.getVisitSummary().get(0).getVisitNumber() + " of visitorID: " + visitor.getId() + "!!");

	}
}
