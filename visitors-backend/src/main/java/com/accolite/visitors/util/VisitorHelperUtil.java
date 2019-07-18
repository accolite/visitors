package com.accolite.visitors.util;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;
import java.util.stream.Collectors;

import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.accolite.visitors.dao.VisitSummaryDao;
import com.accolite.visitors.dao.VisitorDao;
import com.accolite.visitors.enums.VisitorSearchCriteria;
import com.accolite.visitors.enums.VisitorType;
//import com.accolite.visitors.model.QVisitSummary;
//import com.accolite.visitors.model.QVisitor;
import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;
import com.querydsl.core.types.dsl.BooleanExpression;

@Component
public class VisitorHelperUtil {

	@Autowired
	private VisitorDao visitorDao;

	@Autowired
	private VisitSummaryDao visitSummaryDao;

	/**
	 * @param searchParams
	 * @return
	 */
	public Set<VisitSummary> searchVisitors(Map<VisitorSearchCriteria, Object> searchParams) {

		QVisitSummary qVisitSummary = new QVisitSummary("visitSummary");
		QVisitor qVisitor = new QVisitor("visitor");
		BooleanExpression vFilter = null;
		BooleanExpression vsFilter = null;

		for (Entry<VisitorSearchCriteria, Object> entry : searchParams.entrySet()) {

			String value = String.valueOf(entry.getValue());
			switch (entry.getKey()) {
			case firstName:
				vFilter = qVisitor.firstName.startsWithIgnoreCase(value);
				break;
			case lastName:
				vFilter = (vFilter != null) ? (vFilter.and(qVisitor.lastName.startsWithIgnoreCase(value)))
						: (qVisitor.lastName.startsWithIgnoreCase(value));
				break;
			case emailId:
				vFilter = (vFilter != null) ? (vFilter.and(qVisitor.emailId.startsWithIgnoreCase(value)))
						: (qVisitor.emailId.startsWithIgnoreCase(value));
				break;
			case phoneNumber:
				long phoneNum;
				try {
					phoneNum = Long.parseLong(value);
				} catch (NumberFormatException e) {
					break;
				}
				vFilter = (vFilter != null) ? vFilter.and(qVisitor.phoneNumber.eq(phoneNum))
						: qVisitor.phoneNumber.eq(phoneNum);
				break;
			case employeeId:
				long emplId;
				try {
					emplId = Long.parseLong(value);
				} catch (NumberFormatException e) {
					break;
				}
				vFilter = (vFilter != null) ? vFilter.and(qVisitor.employeeId.eq(emplId))
						: qVisitor.employeeId.eq(emplId);
				break;
			case idType:
				vFilter = (vFilter != null) ? (vFilter.and(qVisitor.idType.startsWithIgnoreCase(value)))
						: (qVisitor.idType.startsWithIgnoreCase(value));
				break;
			case idNumber:
				vFilter = (vFilter != null) ? (vFilter.and(qVisitor.idNumber.startsWithIgnoreCase(value)))
						: (qVisitor.idNumber.startsWithIgnoreCase(value));
				break;
			case visitorType:
				VisitorType visitorType;
				try {
					visitorType = VisitorType.valueOf(value);
				} catch (IllegalArgumentException e) {
					break;
				}
				vFilter = (vFilter != null) ? (vFilter.and(qVisitor.visitorType.eq(visitorType)))
						: (qVisitor.visitorType.eq(visitorType));
				break;
			case comingFrom:
				vsFilter = qVisitSummary.comingFrom.startsWithIgnoreCase(value);
				break;
			case officeLocation:
				vsFilter = (vsFilter != null) ? (vsFilter.and(qVisitSummary.officeLocation.startsWithIgnoreCase(value)))
						: (qVisitSummary.officeLocation.startsWithIgnoreCase(value));
				break;
			case contactPerson:
				vsFilter = (vsFilter != null) ? (vsFilter.and(qVisitSummary.contactPerson.startsWithIgnoreCase(value)))
						: (qVisitSummary.contactPerson.startsWithIgnoreCase(value));
				break;
			default:
				break;
			}
		}
		return getVisitorsBasedOnFilter(vFilter, vsFilter);
	}

	/**
	 * @param vFilter
	 * @param vsFilter
	 * @return
	 */
	public Set<VisitSummary> getVisitorsBasedOnFilter(BooleanExpression vFilter, BooleanExpression vsFilter) {

		Set<VisitSummary> visitSummaryList = new HashSet<>();
		List<Visitor> visitors = new ArrayList<>();
		if (vFilter != null) {
			visitors = (List<Visitor>) visitorDao.findAll(vFilter);
		}
		final Set<String> ids = visitors.stream().map(Visitor::getId).collect(Collectors.toSet());
		if (ids != null && !ids.isEmpty()) {
			visitSummaryList.addAll(visitSummaryDao.findByVisitorIn(ids));
		}
		if (vsFilter != null) {
			visitSummaryList.addAll((List<VisitSummary>) visitSummaryDao.findAll(vsFilter));
		}
		return visitSummaryList;
	}

	/**
	 * @param visitSummaryList
	 * @return
	 */
	public Set<VisitSummary> removeDuplicates(Set<VisitSummary> visitSummaryList) {
		Set<String> idsAlreadySeen = new HashSet<>();
		visitSummaryList.removeIf(p -> !idsAlreadySeen.add(p.getVisitor().getId()));
		return visitSummaryList;
	}

	/**
	 * @param endDate
	 * @param startDate
	 * @return
	 */
	@SuppressWarnings("deprecation")
	public Date getEndDate(String endDate, Date startDate) {

		if (endDate == null || endDate.isEmpty()) {
			return new DateTime(startDate).plusDays(1).withTimeAtStartOfDay().toDate();
		}
		return new DateTime(new Date(endDate)).plusDays(1).withTimeAtStartOfDay().toDate();
	}

}
