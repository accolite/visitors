package com.accolite.visitors.model;

import java.io.Serializable;
import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

import com.accolite.visitors.enums.VisitorStatus;

import lombok.Data;

/**
 * @author Lavanya
 *
 */
@Data
public class VisitSummary implements Serializable {

	private static final long serialVersionUID = 1L;

	private int visitNumber;

	private String badgeNo;

	@Size(max = 50)
	private String comingFrom;

	@Size(max = 50)
	private String contactPerson;

	@Email
	private String contactPersonEmailId;

	private Long contactPersonPhone;

	@Size(max = 100)
	private String purpose;

	@Size(max = 100)
	private String officeLocation;

	private Date inTime;

	private Date outTime;

	private VisitorStatus status;

	private Date scheduledStartDate;

	private Date scheduledEndDate;

	private String remarks;

}
