/**
 * 
 */
package com.accolite.visitors.bo;

import java.io.Serializable;
import java.util.Date;

import com.accolite.visitors.enums.VisitorType;

/**
 * @author Lavanya
 *
 */
public class VisitorBO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String id;

	private String firstName;

	private String lastName;

	private long phoneNumber;

	private String emailId;

	private String idType;

	private String idNumber;

	private VisitorType visitorType;

	private long employeeId;

	private String visitSummaryId;

	private String comingFrom;

	private String contactPerson;

	private String purpose;

	private String officeLocation;

	private Date inTime;

	private Date outTime;

	public VisitorBO() {
		super();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getIdType() {
		return idType;
	}

	public void setIdType(String idType) {
		this.idType = idType;
	}

	public String getIdNumber() {
		return idNumber;
	}

	public void setIdNumber(String idNumber) {
		this.idNumber = idNumber;
	}

	public VisitorType getVisitorType() {
		return visitorType;
	}

	public void setVisitorType(VisitorType visitorType) {
		this.visitorType = visitorType;
	}

	public long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(long employeeId) {
		this.employeeId = employeeId;
	}

	public String getVisitSummaryId() {
		return visitSummaryId;
	}

	public void setVisitSummaryId(String visitSummaryId) {
		this.visitSummaryId = visitSummaryId;
	}

	public String getComingFrom() {
		return comingFrom;
	}

	public void setComingFrom(String comingFrom) {
		this.comingFrom = comingFrom;
	}

	public String getContactPerson() {
		return contactPerson;
	}

	public void setContactPerson(String contactPerson) {
		this.contactPerson = contactPerson;
	}

	public String getPurpose() {
		return purpose;
	}

	public void setPurpose(String purpose) {
		this.purpose = purpose;
	}

	public String getOfficeLocation() {
		return officeLocation;
	}

	public void setOfficeLocation(String officeLocation) {
		this.officeLocation = officeLocation;
	}

	public Date getInTime() {
		return inTime;
	}

	public void setInTime(Date inTime) {
		this.inTime = inTime;
	}

	public Date getOutTime() {
		return outTime;
	}

	public void setOutTime(Date outTime) {
		this.outTime = outTime;
	}

	@Override
	public String toString() {
		return "VisitorBO [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", phoneNumber="
				+ phoneNumber + ", emailId=" + emailId + ", idType=" + idType + ", idNumber=" + idNumber
				+ ", visitorType=" + visitorType + ", employeeId=" + employeeId + ", visitSummaryId=" + visitSummaryId
				+ ", comingFrom=" + comingFrom + ", contactPerson=" + contactPerson + ", purpose=" + purpose
				+ ", officeLocation=" + officeLocation + ", inTime=" + inTime + ", outTime=" + outTime + "]";
	}

}
