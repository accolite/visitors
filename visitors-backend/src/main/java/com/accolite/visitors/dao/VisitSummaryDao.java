/**
 * 
 */
package com.accolite.visitors.dao;

import java.util.Date;
import java.util.List;
import java.util.Set;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

import com.accolite.visitors.model.VisitSummary;

/**
 * @author Lavanya
 *
 */
@Repository
public interface VisitSummaryDao extends MongoRepository<VisitSummary, String>, QuerydslPredicateExecutor<VisitSummary> {

	public List<VisitSummary> findByInTimeBetweenOrderByInTimeDesc(Date startDate, Date endDate);

	public void deleteByVisitor(String id);

	public List<VisitSummary> findByVisitorIn(Set<String> ids);

}
