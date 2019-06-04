/**
 * 
 */
package com.accolite.visitors.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.accolite.visitors.dao.VisitorDao;
import com.accolite.visitors.model.Visitor;

/**
 * @author Lavanya
 *
 */
@Service
public class VisitorServiceImpl implements VisitorService {

	@Autowired
	private VisitorDao visitorDao;

	@Override
	public Visitor createVisitor(Visitor visitor) {
		return visitorDao.insert(visitor);
	}
}
