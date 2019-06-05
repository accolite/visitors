/**
 * 
 */
package com.accolite.visitors.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.accolite.visitors.model.Visitor;

/**
 * @author Lavanya
 *
 */
@Repository
public interface VisitorDao extends MongoRepository<Visitor, String> {

	public List<Visitor> findByInTimeBetweenOrderByInTimeDesc(Date startDate, Date endDate);

}
