/**
 * 
 */
package com.accolite.visitors.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.accolite.visitors.dao.VisitorDao;

/**
 * @author Lavanya
 *
 */
@Service
public class VisitorServiceImpl implements VisitorService {

	@Autowired
	private VisitorDao visitorDao;

}
