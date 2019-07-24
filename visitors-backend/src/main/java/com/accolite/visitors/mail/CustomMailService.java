package com.accolite.visitors.mail;

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

@Service
public class CustomMailService {

	@Autowired
	private Environment env;

	@Autowired
	private VisitorsMongoData visitorsMongoData;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	Properties prop = new Properties();
	Session session;

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

	public JSONObject sendApprovalMail(Visitor visitor) {
		logger.info("INSIDE sendApprovalMail()");
		JSONObject status = new JSONObject();
		VisitSummary visitSummary = visitor.getVisitSummary().get(0);
		status.put("status", "Unable to Send Approval Mail to " + visitSummary.getContactPerson() + "!!");
		String subject = "Visitor Approval Required for " + visitor.getFirstName();
		String responseUrl = env.getProperty("applicationURL")+"/api-dev/visitor/approvalResponse";
		String pocApprovalOption=VisitorStatus.APPROVED.toString();
		String approvalStatus=VisitorStatus.PENDING.toString();
		if (visitor.getVisitSummary().get(0).getBadgeNo()==null || visitor.getVisitSummary().get(0).getBadgeNo().isEmpty()) {
			pocApprovalOption=VisitorStatus.SCHEDULED.toString();
			approvalStatus=VisitorStatus.SCHEDULED.toString();
		}

		String content = "<p><strong>Dear " + visitSummary.getContactPerson() + "</strong><br />" + "One visitor "
				+ visitor.getFirstName() + " is waiting for your approval.<br /> <br />" + "Visitor's full name : "
				+ visitor.getFirstName() + "  " + visitor.getLastName() + "<br />" + "Visitor's email: "
				+ visitor.getEmailId() + "<br />Phone no.:" + visitor.getPhoneNumber() + "<br />" + "Purpose:"
				+ visitSummary.getPurpose() + "&nbsp;<br /></p>\r\n"
				+ "<p>Please Responsd back with your Response !</p>\r\n" + "<form action=\"" + responseUrl
				+ "\" method=\"get\">\r\n" + "			<input type=\"hidden\"  name=\"visitorId\" value=\""
				+ visitor.getId() + "\">\r\n" + "			<input type=\"hidden\"  name=\"visitNumber\" value=\""
				+ visitSummary.getVisitNumber() + "\">\r\n"+ "			<input type=\"hidden\"  name=\"visitorEmail\" value=\""
						+ visitor.getEmailId() + "\">\r\n"
				+ "            <input type=\"radio\"  name=\"approval\" value=\""+pocApprovalOption+"\" checked><label style=\"color:green;font-weight: bold;\"> Approve</label>\r\n"
				+ "            <input type=\"radio\" name=\"approval\" value=\"DECLINED\"><label style=\"color:red;font-weight: bold;\"> Decline</label><br /><br/>\r\n"
				+ "			Comment / Remarks: <input required type=\"text\" name=\"remarks\" value=\"Wait for 10 minutes !\"></br></br>\r\n"
				+ "			<button type=\"submit\" >Submit</button>\r\n" + "</form>";

		if (sendMail(visitSummary.getContactPersonEmailId(), subject, content)) {
			logger.info("Approval Mail Successfully Sent to " + visitSummary.getContactPersonEmailId() + "!!");
			// Updating VisitSummary Status
			visitorsMongoData.updateVisitSummaryRemarksAndStatus(visitor.getId(), visitSummary.getVisitNumber(),
					approvalStatus, "Approval Mail Sent");
			logger.info("Status Updated to PENDING for visitNumber: " + visitSummary.getVisitNumber() + "of visitorID: "
					+ visitor.getId() + "!!");

			new Thread(() -> {
				final String sub = "Your visit request created for Accolite office ";
				final String msg = "<p><strong>Dear " + visitor.getFirstName()
						+ "</strong><br /> one visit request is created on behalf of you.<br /> your POC <strong> "
						+ visitor.getVisitSummary().get(0).getContactPerson()
						+ "</strong> will get back to you shortly!<br /><br /> <br /> this is a system generated mail please do not reply to this mail.<br /> <br />  Thank you for visiting @ Accolite </p>";
				if(sendMail(visitor.getEmailId(), sub, msg)) {
					logger.info(visitor.getFirstName()+" is updated for his/her visit @ Accolite" + "!!");
				}

			}).start();

			return status.put("status",
					"Approval Mail Successfully Sent to " + visitSummary.getContactPersonEmailId() + " !!");
		}
		status.put("fail", "true");
		return status;
	}

	public JSONObject approvalResponse(String visitorId, String visitNumber, String approval, String remarks, String visitorEmail) {
		JSONObject response = new JSONObject();
		String status = "Unable to Update Status for visitorId: " + visitorId + " visitNumber: " + visitNumber
				+ " approval: " + approval + "remarks: " + remarks+"remarks: " + visitorEmail;
			if (visitorsMongoData.updateVisitSummaryRemarksAndStatus(visitorId, Integer.parseInt(visitNumber), approval,
				remarks)) {
			logger.info("Status Updated to " + approval + " for visit number:" + visitNumber + "of visitorID :"
					+ visitorId + "remarks" + remarks + "!!");
			status = "Your Response is Recorded,  Thank you for your Response!!";
			
			new Thread(() -> {
				final String sub = "Update for your visit @ Accolite office ";
				final String msg = "<p>Your vsit request is <strong>"+approval+"<br /> Comments:"+remarks+"</strong><br /><br /><br /><br /> this is a system generated mail please do not reply to this mail !<br /> Thank you for visiting @ Accolite";
				if(sendMail(visitorEmail, sub, msg)) {
					logger.info(visitorEmail+" is updated for his/her visit @ Accolite" + "!!");
				}
			}).start();
		}
		response.put("status", status);
		return response;
	}

	public JSONObject sendNotifyMail(Visitor visitor) {
		logger.info("INSIDE sendNotifyMail()");
		JSONObject status = new JSONObject();
		VisitSummary visitSummary = visitor.getVisitSummary().get(0);
		status.put("status", "Unable to send Notification Email to  " + visitSummary.getContactPerson() + " !!");
		String subject = "Visitor " + visitor.getFirstName() + " is waiting at Reception";
		String responseUrl = env.getProperty("applicationURL")+"/api-dev/visitor/approvalResponse";

		String content = "<p><strong>Dear " + visitSummary.getContactPerson() + "</strong><br />"
				+ "The Scheduled visitor " + visitor.getFirstName() + " is waiting at Reception.<br />"
				+ "Visitor's full name : " + visitor.getFirstName() + "  " + visitor.getLastName() + "<br />"
				+ "Visitor's email: " + visitor.getEmailId() + "<br />Phone no.:" + visitor.getPhoneNumber() + "<br />"
				+ "Purpose:" + visitSummary.getPurpose() + "&nbsp;<br /> Comming from:" + visitSummary.getComingFrom()
				+ "</p>\r\n" + "<p>Please Responsd back with your Response.</p>\r\n" + "<form action=\"" + responseUrl
				+ "\" method=\"get\">\r\n" + "			<input type=\"hidden\"  name=\"visitorId\" value=\""
				+ visitor.getId() + "\">\r\n" + "			<input type=\"hidden\"  name=\"visitNumber\" value=\""
				+ visitSummary.getVisitNumber() + "\">\r\n"+ "			<input type=\"hidden\"  name=\"visitorEmail\" value=\""
						+ visitor.getEmailId() + "\">\r\n"
				+ "            <input type=\"radio\"  name=\"approval\" value=\"APPROVED\" checked><label style=\"color:green;font-weight: bold;\"> Approve</label>\r\n"
				+ "            <input type=\"radio\" name=\"approval\" value=\"DECLINED\"><label style=\"color:red;font-weight: bold;\"> Decline</label><br /><br/>\r\n"
				+ "			Comment / Remarks: <input required type=\"text\" name=\"remarks\" value=\"Wait for 10 minutes !\"></br></br>\r\n"
				+ "			<button type=\"submit\" >Submit</button>\r\n" + "</form>";

		if (sendMail(visitSummary.getContactPersonEmailId(), subject, content)) {
			logger.info("Notification Mail Successfully Sent to " + visitSummary.getContactPersonEmailId() + "!!");
			visitSummary.setStatus(VisitorStatus.PENDING);
			// visitorService.updateVisitSummary(visitor.getId(), visitSummary);

			visitorsMongoData.updateVisitSummaryRemarksAndStatus(visitor.getId(), visitSummary.getVisitNumber(),
					VisitorStatus.PENDING.toString(), "Notification Mail Sent");

			logger.info("Status Updated to PENDING for visit number:" + visitSummary.getVisitNumber()
					+ " of visitorID :" + visitor.getId() + "!!");
			
			new Thread(() -> {
				final String sub = "Your POC "+visitor.getVisitSummary().get(0).getContactPerson()+" has been notified for your visit @ Accolite office ";
				final String msg = "<p>Dear <strong>" + visitor.getFirstName()
						+ "</strong> Your POC  <strong>"+visitor.getVisitSummary().get(0).getContactPerson()
						+ "</strong> has been notified for your visit @ Accolite Office <br /> we will get back to you shortly!<br /><br /><br /><br /> this is a system generated mail please do not reply to this mail !<br /><br /> Thank you for visiting @ Accolite";
				if(sendMail(visitor.getEmailId(), sub, msg)) {
					logger.info(visitor.getFirstName()+" is updated for his/her visit @ Accolite" + "!!");
				}

			}).start();
			
			
			return status.put("status",
					"Notification Mail Successfully Sent to  " + visitSummary.getContactPersonEmailId() + " !!");
		}
		status.put("fail", "true");
		return status;
	}

	public void notifyVisitor(String to, String subject, String Content) {

	}
}
