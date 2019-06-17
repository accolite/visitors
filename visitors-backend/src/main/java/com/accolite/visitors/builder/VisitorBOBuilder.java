/**
 * 
 */
package com.accolite.visitors.builder;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import com.accolite.visitors.bo.VisitorBO;
import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;

/**
 * @author Lavanya
 *
 */
public class VisitorBOBuilder {

	public static Visitor buildVisitor(VisitorBO visitorBO) {

		Visitor visitor = null;
		if (visitorBO != null) {
			visitor = new Visitor();

			visitor.setFirstName(visitorBO.getFirstName());
			visitor.setLastName(visitorBO.getLastName());
			visitor.setEmailId(visitorBO.getEmailId());
			visitor.setPhoneNumber(visitorBO.getPhoneNumber());
			visitor.setVisitorType(visitorBO.getVisitorType());
			visitor.setIdType(visitorBO.getIdType());
			visitor.setIdNumber(visitorBO.getIdNumber());
			visitor.setEmployeeId(visitorBO.getEmployeeId());
			if (visitorBO.getId() != null) {
				visitor.setId(visitorBO.getId());
			}
		}
		return visitor;
	}

	public static VisitSummary buildVisitSummary(VisitorBO visitorBO) {

		VisitSummary visitSummary = null;
		if (visitorBO != null) {
			visitSummary = new VisitSummary();

			visitSummary.setComingFrom(visitorBO.getComingFrom());
			visitSummary.setContactPerson(visitorBO.getContactPerson());
			visitSummary.setPurpose(visitorBO.getPurpose());
			visitSummary.setOfficeLocation(visitorBO.getOfficeLocation());
			visitSummary.setInTime((visitorBO.getInTime() == null) ? new Date() : visitorBO.getInTime());
			visitSummary.setOutTime(visitorBO.getOutTime());
			if (visitorBO.getVisitSummaryId() != null) {
				visitSummary.setId(visitorBO.getVisitSummaryId());
			}
		}
		return visitSummary;
	}

	public static VisitorBO buildVisitorBO(Visitor visitor, VisitSummary visitSummary) {

		VisitorBO visitorBO = null;
		if (visitor != null && visitSummary != null) {
			visitorBO = new VisitorBO();

			visitorBO.setId(visitor.getId());
			visitorBO.setFirstName(visitor.getFirstName());
			visitorBO.setLastName(visitor.getLastName());
			visitorBO.setEmailId(visitor.getEmailId());
			visitorBO.setPhoneNumber(visitor.getPhoneNumber());
			visitorBO.setVisitorType(visitor.getVisitorType());
			visitorBO.setIdType(visitor.getIdType());
			visitorBO.setIdNumber(visitor.getIdNumber());
			visitorBO.setEmployeeId(visitor.getEmployeeId());
			visitorBO.setVisitSummaryId(visitSummary.getId());
			visitorBO.setComingFrom(visitSummary.getComingFrom());
			visitorBO.setContactPerson(visitSummary.getContactPerson());
			visitorBO.setPurpose(visitSummary.getPurpose());
			visitorBO.setOfficeLocation(visitSummary.getOfficeLocation());
			visitorBO.setInTime(visitSummary.getInTime());
			visitorBO.setOutTime(visitSummary.getOutTime());
		}
		return visitorBO;
	}

	public static List<VisitorBO> buildVisitorBOBySummary(List<VisitSummary> visitSummaryList) {

		final List<VisitorBO> visitorBOs = new ArrayList<>();
		if (visitSummaryList != null) {
			visitSummaryList.stream().filter(Objects::nonNull).forEach(e -> {
				VisitorBO bo = buildVisitorBO(e.getVisitor(), e);
				visitorBOs.add(bo);
			});
		}
		return visitorBOs;
	}
}
