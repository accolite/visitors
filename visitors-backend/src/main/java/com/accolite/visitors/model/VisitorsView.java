package com.accolite.visitors.model;

import com.accolite.visitors.enums.VisitorType;

import lombok.Data;

/**
 * 
 * @author Harshal
 *
 */

@Data
public class VisitorsView {

	private String id;

	private String firstName;

	private String lastName;

	private long phoneNumber;

	private String emailId;

	private String idType;

	private String idNumber;

	private VisitorType visitorType;

	private String imageId;

	private VisitSummary visitSummary;

}
