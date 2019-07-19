package com.accolite.visitors.mail;

import java.util.List;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.accolite.visitors.db.VisitorsMongoData;
import com.accolite.visitors.enums.VisitorStatus;
import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;
import com.accolite.visitors.model.VisitorMail;
import com.accolite.visitors.service.VisitorService;

@Service
public class CustomMailService {
	private JavaMailSender javaMailSender;

	/**
	 * 
	 * @param javaMailSender
	 * @return
	 */
	@Autowired
	public void MailService(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}

	@Autowired
	private Environment env;

	@Autowired
	private VisitorService visitorService;

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

		String responseUrl = "http://localhost:8081/api-dev/visitor/approvalResponse?visitorId=" + visitor.getId()
				+ "&visitNumber=" + visitSummary.getVisitNumber();

		String content = "<p><strong>Dear " + visitSummary.getContactPerson() + "</strong><br />" + "One visitor "
				+ visitor.getFirstName() + " is waiting for your approval.<br />" + "Visitor's full name : "
				+ visitor.getFirstName() + "  " + visitor.getLastName() + "<br />" + "Visitor's email: "
				+ visitor.getEmailId() + "<br />Phone no.:" + visitor.getPhoneNumber() + "<br />" + "Purpose:"
				+ visitSummary.getPurpose() + "&nbsp;<br /> Comming from:" + visitSummary.getComingFrom() + "</p>\r\n"
				+ "<p>Click on Below link to approve or decline the request</p>\r\n"
				+ "<p><strong><span style=\"color: #0b6e10;\"><a href=\"" + responseUrl + "&approval="
				+ VisitorStatus.APPROVED + "\">Approve</a>&nbsp;</span>" + " &nbsp;<a href=\"" + responseUrl
				+ "&approval=" + VisitorStatus.DECLINED
				+ "\"><span style=\"color: #ff0000;\">Decline</span></a></strong></p>";

		if (sendMail(visitSummary.getContactPersonEmailId(), subject, content)) {
			logger.info("Approval Mail Successfully Sent to " + visitSummary.getContactPersonEmailId() + "!!");
			visitSummary.setStatus(VisitorStatus.PENDING);
			visitorService.updateVisitSummary(visitor.getId(), visitSummary);
			logger.info("Status Updated to PENDING for visit number:" + visitSummary.getVisitNumber() + "of visitorID :"
					+ visitor.getId() + "!!");
			return status.put("status",
					"Approval Mail Successfully Sent to " + visitSummary.getContactPersonEmailId() + " !!");
		}
		status.put("fail", "true");
		return status;
	}

	public JSONObject approvalResponse(String visitorId, String visitNumber, String approval) {
		JSONObject response = new JSONObject();
		String status = "Unable to Update Status for \n visitorId:" + visitorId + "\n visitNumber:" + visitNumber
				+ "\n approval: " + approval;
		
		if (visitorsMongoData.updateVisitSummaryStatus(visitorId,
				Integer.parseInt(visitNumber), approval)) {
			logger.info("Status Updated to " + approval + " for visit number:" + visitNumber + "of visitorID :" + visitorId
					+ "!!");
			status = "Response Recorded !! \n visitorId:" + visitorId + "\n visitNumber:" + visitNumber
					+ "\n approval: " + approval;
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

		String responseUrl = "http://localhost:8081/api-dev/visitor/approvalResponse?visitorId=" + visitor.getId()
				+ "&visitNumber=" + visitSummary.getVisitNumber();

		String content = "<p><strong>Dear " + visitSummary.getContactPerson() + "</strong><br />"
				+ "The Scheduled visitor " + visitor.getFirstName() + " is waiting at Reception.<br />"
				+ "Visitor's full name : " + visitor.getFirstName() + "  " + visitor.getLastName() + "<br />"
				+ "Visitor's email: " + visitor.getEmailId() + "<br />Phone no.:" + visitor.getPhoneNumber() + "<br />"
				+ "Purpose:" + visitSummary.getPurpose() + "&nbsp;<br /> Comming from:" + visitSummary.getComingFrom()
				+ "</p>\r\n" + "<p>Click on Below link to notify the reception.</p>\r\n"
				+ "<p><strong><span style=\"color: #0b6e10;\"><a href=\"" + responseUrl + "&approval="
				+ VisitorStatus.APPROVED + "\">Noticed</a>&nbsp;</span>" + " &nbsp;<a href=\"" + responseUrl
				+ "&approval=" + VisitorStatus.DECLINED
				+ "\"><span style=\"color: #ff0000;\">Ignore</span></a></strong></p>";

		if (sendMail(visitSummary.getContactPersonEmailId(), subject, content)) {
			logger.info("Notification Mail Successfully Sent to " + visitSummary.getContactPersonEmailId() + "!!");
			visitSummary.setStatus(VisitorStatus.PENDING);
			visitorService.updateVisitSummary(visitor.getId(), visitSummary);
			logger.info("Status Updated to PENDING for visit number:" + visitSummary.getVisitNumber()
					+ " of visitorID :" + visitor.getId() + "!!");
			return status.put("status",
					"Notification Mail Successfully Sent to  " + visitSummary.getContactPersonEmailId() + " !!");
		}
		status.put("fail", "true");
		return status;
	}

	public JSONObject notifyResponse(String visitorId, String visitNumber, String niticed) {

		JSONObject response = new JSONObject();

		VisitSummary visitSummary = new VisitSummary();
		visitSummary.setVisitNumber(Integer.parseInt(visitNumber));
		visitSummary.setStatus(VisitorStatus.valueOf(niticed));
		visitorService.updateVisitSummary(visitorId, visitSummary);
		logger.info("Status Updated to " + niticed + " for visit number:" + visitNumber + "of visitorID :" + visitorId
				+ "!!");
		String status = "Response Recorded !! \n visitorId:" + visitorId + "\n visitNumber:" + visitNumber
				+ "\n Notice: " + niticed;
		response.put("status", status);
		return response;
	}
}
