package com.accolite.visitors.model;

import java.io.Serializable;
import java.util.Date;

import javax.validation.constraints.Size;

import org.springframework.data.mongodb.core.index.Indexed;

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

	private String contactPersonEmailId;

	private Long contactPersonPhone;

	@Size(max = 100)
	private String purpose;

	@Indexed
	@Size(max = 100)
	private String officeLocation;

	private Date inTime;

	private Date outTime;

	private VisitorStatus status;

	private Date scheduledTime;

	private String remarks;

}
