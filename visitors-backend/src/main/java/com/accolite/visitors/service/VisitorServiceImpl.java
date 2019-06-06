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

import com.accolite.visitors.dao.VisitorDao;
import com.accolite.visitors.exception.VisitorNotFoundException;
import com.accolite.visitors.model.Visitor;

/**
 * @author Lavanya
 *
 */
@Transactional
@Service
public class VisitorServiceImpl implements VisitorService {

	@Autowired
	private VisitorDao visitorDao;

	@Override
	public Visitor createVisitor(Visitor visitor) {
		return visitorDao.insert(visitor);
	}

	@SuppressWarnings("deprecation")
	@Override
	public List<Visitor> getVisitorsByInTime(String startDate, String endDate) {
		Date start = new Date(startDate);
		Date end = ((endDate == null || endDate.isEmpty()) ? getEndDate(start) : new Date(endDate));
		return visitorDao.findByInTimeBetweenOrderByInTimeDesc(start, end);
	}

	@Override
	public boolean exitVisitor(String id, Long exitTime) throws VisitorNotFoundException {
		Visitor visitor = visitorDao.findById(id).orElseThrow(() -> new VisitorNotFoundException("Visitor not found."));
		if (visitor != null) {
			visitor.setOutTime((exitTime != null) ? new Date(exitTime) : new Date());
			visitorDao.save(visitor);
			return true;
		}
		return false;
	}

	@Override
	public List<Visitor> getVisitors() {
		return visitorDao.findAll(Sort.by(Sort.Direction.DESC, "inTime"));
	}

	@Override
	public boolean deleteVisitor(String id) {
		visitorDao.deleteById(id);
		return true;
	}

	/**
	 * @param startDate
	 * @return
	 */
	private Date getEndDate(Date startDate) {
		return new DateTime(startDate).plusDays(1).withTimeAtStartOfDay().toDate();
	}

}
