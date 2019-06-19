/**
 * 
 */
package com.accolite.visitors.model;

import java.io.Serializable;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import com.accolite.visitors.enums.VisitorType;

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

	@Indexed
	@NotEmpty(message = "First Name is mandatory")
	@Size(max = 50)
	private String firstName;

	@Indexed
	@NotEmpty(message = "Last Name is mandatory")
	@Size(max = 50)
	private String lastName;

	@NotNull(message = "Phone Number is mandatory")
	private long phoneNumber;

	@Indexed(unique = true)
	@NotEmpty(message = "Email ID is mandatory")
	@Email
	private String emailId;

	// Aadhar or PAN or License etc.,
	@Size(max = 50)
	private String idType;

	@Indexed(sparse = true)
	@Size(max = 50)
	private String idNumber;

	// Employee or Guest
	@NotEmpty(message = "Visitor Type is mandatory")
	private VisitorType visitorType;

	@Indexed(sparse = true)
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((emailId == null) ? 0 : emailId.hashCode());
		result = prime * result + (int) (employeeId ^ (employeeId >>> 32));
		result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((idNumber == null) ? 0 : idNumber.hashCode());
		result = prime * result + ((idType == null) ? 0 : idType.hashCode());
		result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
		result = prime * result + (int) (phoneNumber ^ (phoneNumber >>> 32));
		result = prime * result + ((visitorType == null) ? 0 : visitorType.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Visitor other = (Visitor) obj;
		if (emailId == null) {
			if (other.emailId != null)
				return false;
		} else if (!emailId.equals(other.emailId))
			return false;
		if (employeeId != other.employeeId)
			return false;
		if (firstName == null) {
			if (other.firstName != null)
				return false;
		} else if (!firstName.equals(other.firstName))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (idNumber == null) {
			if (other.idNumber != null)
				return false;
		} else if (!idNumber.equals(other.idNumber))
			return false;
		if (idType == null) {
			if (other.idType != null)
				return false;
		} else if (!idType.equals(other.idType))
			return false;
		if (lastName == null) {
			if (other.lastName != null)
				return false;
		} else if (!lastName.equals(other.lastName))
			return false;
		if (phoneNumber != other.phoneNumber)
			return false;
		if (visitorType != other.visitorType)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Visitor [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", phoneNumber="
				+ phoneNumber + ", emailId=" + emailId + ", idType=" + idType + ", idNumber=" + idNumber
				+ ", visitorType=" + visitorType + ", employeeId=" + employeeId + "]";
	}

}
