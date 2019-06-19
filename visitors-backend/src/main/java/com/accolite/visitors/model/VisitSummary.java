/**
 * 
 */
package com.accolite.visitors.model;

import java.io.Serializable;
import java.util.Date;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.querydsl.core.annotations.QueryEntity;

/**
 * @author Lavanya
 *
 */
@QueryEntity
@Document(collection = "visit_summary")
public class VisitSummary implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	private String id;

	@DBRef
	private Visitor visitor;

	@Size(max = 50)
	private String comingFrom;

	@Size(max = 50)
	private String contactPerson;

	@Size(max = 100)
	private String purpose;

	@Indexed
	@Size(max = 100)
	private String officeLocation;

	@Indexed(direction = IndexDirection.DESCENDING)
	private Date inTime;

	private Date outTime;

	public VisitSummary() {
		super();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Visitor getVisitor() {
		return visitor;
	}

	public void setVisitor(Visitor visitor) {
		this.visitor = visitor;
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
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((comingFrom == null) ? 0 : comingFrom.hashCode());
		result = prime * result + ((contactPerson == null) ? 0 : contactPerson.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((inTime == null) ? 0 : inTime.hashCode());
		result = prime * result + ((officeLocation == null) ? 0 : officeLocation.hashCode());
		result = prime * result + ((outTime == null) ? 0 : outTime.hashCode());
		result = prime * result + ((purpose == null) ? 0 : purpose.hashCode());
		result = prime * result + ((visitor == null) ? 0 : visitor.hashCode());
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
		VisitSummary other = (VisitSummary) obj;
		if (comingFrom == null) {
			if (other.comingFrom != null)
				return false;
		} else if (!comingFrom.equals(other.comingFrom))
			return false;
		if (contactPerson == null) {
			if (other.contactPerson != null)
				return false;
		} else if (!contactPerson.equals(other.contactPerson))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (inTime == null) {
			if (other.inTime != null)
				return false;
		} else if (!inTime.equals(other.inTime))
			return false;
		if (officeLocation == null) {
			if (other.officeLocation != null)
				return false;
		} else if (!officeLocation.equals(other.officeLocation))
			return false;
		if (outTime == null) {
			if (other.outTime != null)
				return false;
		} else if (!outTime.equals(other.outTime))
			return false;
		if (purpose == null) {
			if (other.purpose != null)
				return false;
		} else if (!purpose.equals(other.purpose))
			return false;
		if (visitor == null) {
			if (other.visitor != null)
				return false;
		} else if (!visitor.equals(other.visitor))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "VisitSummary [id=" + id + ", visitor=" + visitor + ", comingFrom=" + comingFrom + ", contactPerson="
				+ contactPerson + ", purpose=" + purpose + ", officeLocation=" + officeLocation + ", inTime=" + inTime
				+ ", outTime=" + outTime + "]";
	}

}
