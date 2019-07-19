package com.accolite.visitors.model;

import lombok.Data;

@Data
public class VisitorMail {
	String visitorId;
	int visitNumber;
	String firstName;
	String lastName;
	String visitorEmail;
	String visitorPhone;
	String purpose;
	String commingFrom;
	String contactPersonEmail;
	String contactPersonName;
}
