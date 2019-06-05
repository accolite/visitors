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

	@NotEmpty
	@Size(max = 50)
	private String firstName;

	@NotEmpty
	@Size(max = 50)
	private String lastName;

	@NotNull
	private long phoneNumber;

	@NotEmpty
	@Email
	private String email;

	@NotEmpty
	private String location;

	// Aadhar or PAN or License etc.,
	@NotEmpty
	@Size(max = 50)
	private String uniqueIdType;

	@NotEmpty
	@Size(max = 50)
	private String uniqueIdNumber;

	private Date inTime;

	private Date outTime;

	private String personOfContact;
	private String purpose;

	// Employee or Guest
	@NotEmpty
	private String visitorType;

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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getUniqueIdType() {
		return uniqueIdType;
	}

	public void setUniqueIdType(String uniqueIdType) {
		this.uniqueIdType = uniqueIdType;
	}

	public String getUniqueIdNumber() {
		return uniqueIdNumber;
	}

	public void setUniqueIdNumber(String uniqueIdNumber) {
		this.uniqueIdNumber = uniqueIdNumber;
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

	public String getPersonOfContact() {
		return personOfContact;
	}

	public void setPersonOfContact(String personOfContact) {
		this.personOfContact = personOfContact;
	}

	public String getPurpose() {
		return purpose;
	}

	public void setPurpose(String purpose) {
		this.purpose = purpose;
	}

	public String getVisitorType() {
		return visitorType;
	}

	public void setVisitorType(String visitorType) {
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
				+ phoneNumber + ", email=" + email + ", location=" + location + ", uniqueIdType=" + uniqueIdType
				+ ", uniqueIdNumber=" + uniqueIdNumber + ", inTime=" + inTime + ", outTime=" + outTime
				+ ", personOfContact=" + personOfContact + ", purpose=" + purpose + ", visitorType=" + visitorType
				+ ", officeLocation=" + officeLocation + ", employeeId=" + employeeId + "]";
	}

}
