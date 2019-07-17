package com.accolite.visitors.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.accolite.visitors.enums.VisitorSearchCriteria;
import com.accolite.visitors.exception.VisitorNotFoundException;
import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;
import com.accolite.visitors.repository.VisitorRepository;
import com.accolite.visitors.util.VisitorHelperUtil;

/**
 * @author Lavanya
 *
 */
@Transactional
@Service
public class VisitorServiceImpl implements VisitorService {

	@Autowired
	private VisitorRepository visitorRepository;

	@Autowired
	private VisitorHelperUtil visitorHelperUtil;

	/**
	 * Create new Visitor
	 */
	@Override
	public Visitor createVisitor(Visitor visitor) {
		if (visitor.getVisitSummary() != null && visitor.getVisitSummary().size() == 1) {
			visitor.getVisitSummary().get(0).setInTime(new Date());
			visitor.getVisitSummary().get(0).setVisitNumber(1);
		}
		return visitorRepository.save(visitor);
	}
	
	/**
	 * Get All the visitors
	 * Need to Implement - Order By
	 */
	@Override
	public List<Visitor> getVisitors() {
		//return visitorDao.findAllByOrderByInTimeDesc();
		return visitorRepository.findAll();
	}
	
	/**
	 * Get Visitor by Id
	 */
	@Override
	public Visitor getVisitorById(String id) throws VisitorNotFoundException {
		return visitorRepository.findById(id)
					.orElseThrow(() -> new VisitorNotFoundException("Visitor not found."));
	}

	
	@Override
	public boolean deleteVisitor(String id) {
		visitorRepository.deleteById(id);
		return Boolean.TRUE;
	}

	@Override
	public List<Visitor> getVisitorsByInTime(Date startDate, Date endDate) {
		return visitorRepository.findByVisitSummary_InTimeBetweenOrderByVisitSummary_InTimeDesc(startDate, endDate);
	}

	@Override
	public boolean exitVisitor(String id, Date exitTime) throws VisitorNotFoundException {

		long count = visitorRepository.updateEndTime(id);
		System.out.println(count);

		if (count != 1) {
			throw new VisitorNotFoundException("Failed to update the exit time");
		}
		return true;
	}

	@Override
	public void addVisit(String id, VisitSummary visitSummary) throws VisitorNotFoundException {
		visitSummary.setInTime(new Date());
		visitorRepository.addVisit(id, visitSummary);
	}
	
	/*@Override
	public List<VisitorBO> searchVisitor(Map<VisitorSearchCriteria, Object> searchParams) {
		//Set<VisitSummary> visitSummaryList = visitorHelperUtil.searchVisitors(searchParams);
		//return VisitorBOBuilder.buildVisitorBOBySummary(visitSummaryList);
		return null;
	}*/
	

}
