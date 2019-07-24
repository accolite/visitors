package com.accolite.visitors.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.accolite.visitors.model.Visitor;

/**
 * @author Lavanya
 *
 */
@Repository
public interface VisitorRepository extends MongoRepository<Visitor, String>, VisitorDAL {

	@Query(fields = "{'visitSummary.$':1}")
	public List<Visitor> findByVisitSummary_InTimeBetweenOrderByVisitSummary_InTimeDesc(Date startDate, Date endDate);

	public void deleteById(String id);

	@Query(value = "{}", fields = "{visitSummary:0}")
	public Page<Visitor> findAllWithoutSummary(Pageable page);

}
