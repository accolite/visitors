/**
 * 
 */
package com.accolite.visitors.service;

import java.util.Date;
import java.util.List;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.accolite.visitors.bo.VisitorBO;
import com.accolite.visitors.builder.VisitorBOBuilder;
import com.accolite.visitors.dao.VisitSummaryDao;
import com.accolite.visitors.dao.VisitorDao;
import com.accolite.visitors.exception.VisitorNotFoundException;
import com.accolite.visitors.model.QVisitSummary;
import com.accolite.visitors.model.QVisitor;
import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;

/**
 * @author Lavanya
 *
 */
@Transactional
@Service
public class VisitorServiceImpl implements VisitorService {

	@Autowired
	private VisitorDao visitorDao;

	@Autowired
	private VisitSummaryDao visitSummaryDao;

	@Override
	public VisitorBO createVisitor(VisitorBO visitorBO) {

		Visitor visitor = VisitorBOBuilder.buildVisitor(visitorBO);
		VisitSummary visitSummary = VisitorBOBuilder.buildVisitSummary(visitorBO);
		Visitor visitorObj = visitorDao.save(visitor);
		visitSummary.setVisitor(visitorObj);
		VisitSummary visitSummaryObj = visitSummaryDao.save(visitSummary);

		return VisitorBOBuilder.buildVisitorBO(visitorObj, visitSummaryObj);
	}

	@SuppressWarnings("deprecation")
	@Override
	public List<VisitorBO> getVisitorsByInTime(String startDate, String endDate) {
		Date start = new Date(startDate);
		Date end = ((endDate == null || endDate.isEmpty()) ? getEndDate(start) : new Date(endDate));
		List<VisitSummary> visitSummaryList = visitSummaryDao.findByInTimeBetweenOrderByInTimeDesc(start, end);
		return VisitorBOBuilder.buildVisitorBOBySummary(visitSummaryList);
	}

	@Override
	public boolean exitVisitor(String id, Long exitTime) throws VisitorNotFoundException {
		VisitSummary visitSummary = visitSummaryDao.findById(id).get();
		if (visitSummary != null) {
			visitSummary.setOutTime((exitTime != null) ? new Date(exitTime) : new Date());
			visitSummaryDao.save(visitSummary);
			return true;
		}
		return false;
	}

	@Override
	public List<VisitorBO> getVisitors() {
		List<VisitSummary> visitSummaryList = visitSummaryDao.findAll();
		return VisitorBOBuilder.buildVisitorBOBySummary(visitSummaryList);
	}

	@Override
	public boolean deleteVisitor(String id) {
		visitorDao.deleteById(id);
		visitSummaryDao.deleteByVisitor(id);
		return true;
	}

	@Override
	public List<VisitorBO> searchVisitor(String searchTerm) {
		QVisitSummary qVisitSummary = new QVisitSummary("visitSummary");
		QVisitor qVisitor = new QVisitor("visitor");
		/*Predicate name = qVisitSummary.visitor.firstName.containsIgnoreCase(searchTerm)
				.or(qVisitSummary.visitor.lastName.containsIgnoreCase(searchTerm));
		Predicate email = qVisitSummary.visitor.emailId.containsIgnoreCase(searchTerm);
		Predicate comingFrom = qVisitSummary.comingFrom.containsIgnoreCase(searchTerm).or(name).or(email);*/
		
		BooleanExpression name = qVisitSummary.visitor.firstName.containsIgnoreCase(searchTerm)
				.or(qVisitSummary.visitor.lastName.containsIgnoreCase(searchTerm));
		BooleanExpression email = qVisitSummary.visitor.emailId.containsIgnoreCase(searchTerm);
		BooleanExpression comingFrom = qVisitSummary.comingFrom.containsIgnoreCase(searchTerm);//.or(name).or(email);

		// TODO - pending
		List<VisitSummary> visitSummaryList = (List<VisitSummary>) visitSummaryDao.findAll(comingFrom);//, Sort.by(Sort.Direction.ASC, "firstName"));
		return VisitorBOBuilder.buildVisitorBOBySummary(visitSummaryList);
	}

	/**
	 * @param startDate
	 * @return
	 */
	private Date getEndDate(Date startDate) {
		return new DateTime(startDate).plusDays(1).withTimeAtStartOfDay().toDate();
	}

	@Override
	public List<VisitSummary> findByComingFromOrFirstName(String text) {
		return visitSummaryDao.findByComingFromOrFirstName(text);
	}
}
