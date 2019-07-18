package com.accolite.visitors.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

import com.accolite.visitors.model.Visitor;

/**
 * @author Lavanya
 *
 */
@Repository
public interface VisitorRepository extends MongoRepository<Visitor, String>, VisitorDAL, QuerydslPredicateExecutor<Visitor>{

	//@Query(fields = "{'visitSummary':0}")
	//public Optional<Visitor> findByEmailId(String email);
	
	@Query(fields = "{'visitSummary.$':1}")
	public List<Visitor> findByVisitSummary_InTimeBetweenOrderByVisitSummary_InTimeDesc(Date startDate, Date endDate);
	
	//@Query()
	//public List<Visitor> findAllByOrderByInTimeDesc();
	
//	public List<VisitSummary> findByVisitorIn(Set<String> ids);
	
	public void deleteById(String id);
	
}
