package com.accolite.visitors.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.accolite.visitors.exception.VisitorNotFoundException;
import com.accolite.visitors.model.VisitSummary;
import com.accolite.visitors.model.Visitor;
import com.accolite.visitors.repository.VisitorRepository;

/**
 * @author Lavanya
 *
 */
@Transactional
@Service
public class VisitorServiceImpl implements VisitorService {

	@Autowired
	private VisitorRepository visitorRepository;

//	@Autowired
//	private VisitorHelperUtil visitorHelperUtil;
	
	
	@Override
	public Visitor getVisitorByEmail(String email) throws VisitorNotFoundException {		
		return visitorRepository.findByEmailId(email)
				.orElseThrow(() -> new VisitorNotFoundException("Visitor not found."));
	}
	
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
	public void exitVisitor(String id) throws VisitorNotFoundException {
		
		long count = visitorRepository.updateEndTime(id);

		if (count == 0) {
			throw new VisitorNotFoundException("Visitor not found");
		}
	}

	@Override
	public void addVisitSummary(String id, VisitSummary visitSummary) throws VisitorNotFoundException {
		visitSummary.setInTime(new Date());
		long count = visitorRepository.addVisitSummary(id, visitSummary);
		if(count == 0) {
			throw new VisitorNotFoundException("Visitor not found");
		}
	}

	@Override
	public void updateVisitorDetails(String id, Map<String, Object> visitorMap) throws IllegalAccessException {

		long count = visitorRepository.updateVisitorDetails(id, visitorMap);
		if(count == 0) {
			throw new VisitorNotFoundException("Visitor not found");
		}
	}

	
	
	/*@Override
	public List<VisitorBO> searchVisitor(Map<VisitorSearchCriteria, Object> searchParams) {
		//Set<VisitSummary> visitSummaryList = visitorHelperUtil.searchVisitors(searchParams);
		//return VisitorBOBuilder.buildVisitorBOBySummary(visitSummaryList);
		return null;
	}*/
	

}
