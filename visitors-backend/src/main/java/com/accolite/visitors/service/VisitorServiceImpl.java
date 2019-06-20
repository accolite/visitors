/**
 * 
 */
package com.accolite.visitors.service;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.accolite.visitors.bo.VisitorBO;
import com.accolite.visitors.builder.VisitorBOBuilder;
import com.accolite.visitors.dao.VisitSummaryDao;
import com.accolite.visitors.dao.VisitorDao;
import com.accolite.visitors.enums.VisitorSearchCriteria;
import com.accolite.visitors.exception.VisitorNotFoundException;
import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;
import com.accolite.visitors.util.VisitorHelperUtil;

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

	@Autowired
	private VisitorHelperUtil visitorHelperUtil;

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
		Date end = visitorHelperUtil.getEndDate(endDate, start);
		Set<VisitSummary> visitSummaryList = visitSummaryDao.findByInTimeBetweenOrderByInTimeDesc(start, end);
		return VisitorBOBuilder.buildVisitorBOBySummary(visitSummaryList);
	}

	@Override
	public boolean exitVisitor(String id, Long exitTime) throws VisitorNotFoundException {

		VisitSummary visitSummary = visitSummaryDao.findById(id)
				.orElseThrow(() -> new VisitorNotFoundException("Visitor not found."));
		visitSummary.setOutTime((exitTime != null) ? new Date(exitTime) : new Date());
		visitSummaryDao.save(visitSummary);
		return Boolean.TRUE;
	}

	@Override
	public List<VisitorBO> getVisitors() {

		List<VisitSummary> visitSummaryList = visitSummaryDao.findAllByOrderByInTimeDesc();
		return VisitorBOBuilder
				.buildVisitorBOBySummary(visitorHelperUtil.removeDuplicates(new HashSet<>(visitSummaryList)));
	}

	@Override
	public boolean deleteVisitor(String id) {

		visitSummaryDao.deleteById(id);
		return Boolean.TRUE;
	}

	@Override
	public List<VisitorBO> searchVisitor(Map<VisitorSearchCriteria, Object> searchParams) {

		Set<VisitSummary> visitSummaryList = visitorHelperUtil.searchVisitors(searchParams);
		return VisitorBOBuilder.buildVisitorBOBySummary(visitSummaryList);
	}

	@Override
	public Visitor getVisitorById(String id) throws VisitorNotFoundException {

		return visitorDao.findById(id).orElseThrow(() -> new VisitorNotFoundException("Visitor not found."));
	}

}
