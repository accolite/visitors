/**
 * 
 */
package com.accolite.visitors.model;

import java.io.Serializable;
import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.accolite.visitors.util.VisitorType;

/**
 * @author Lavanya
 *
 */
@Document(collection = "visitor")
public class Visitor implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	private String id;

	@NotEmpty(message = "First Name is mandatory")
	@Size(max = 50)
	private String firstName;

	@NotEmpty(message = "Last Name is mandatory")
	@Size(max = 50)
	private String lastName;

	@NotNull(message = "Phone Number is mandatory")
	private long phoneNumber;

	@NotEmpty(message = "Email ID is mandatory")
	@Email
	private String emailId;

	@NotEmpty(message = "Location is mandatory")
	private String comingFrom;

	// Aadhar or PAN or License etc.,
	@NotEmpty(message = "ID Type is mandatory")
	@Size(max = 50)
	private String idType;

	@NotEmpty(message = "ID Number is mandatory")
	@Size(max = 50)
	private String idNumber;

	private Date inTime;

	private Date outTime;

	private String contactPerson;
	private String purpose;

	// Employee or Guest
	//@NotEmpty(message = "Visitor Type is mandatory")
	private VisitorType visitorType;

	// applicable only for Accolite employees
	private String officeLocation;
	private long employeeId;

	public Visitor() {
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

	public String getComingFrom() {
		return comingFrom;
	}

	public void setComingFrom(String comingFrom) {
		this.comingFrom = comingFrom;
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

	public VisitorType getVisitorType() {
		return visitorType;
	}

	public void setVisitorType(VisitorType visitorType) {
		this.visitorType = visitorType;
	}

	public String getOfficeLocation() {
		return officeLocation;
	}

	public void setOfficeLocation(String officeLocation) {
		this.officeLocation = officeLocation;
	}

	public long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(long employeeId) {
		this.employeeId = employeeId;
	}

	@Override
	public String toString() {
		return "Visitor [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", phoneNumber="
				+ phoneNumber + ", emailId=" + emailId + ", comingFrom=" + comingFrom + ", idType=" + idType
				+ ", idNumber=" + idNumber + ", inTime=" + inTime + ", outTime=" + outTime + ", contactPerson="
				+ contactPerson + ", purpose=" + purpose + ", visitorType=" + visitorType + ", officeLocation="
				+ officeLocation + ", employeeId=" + employeeId + "]";
	}

}
