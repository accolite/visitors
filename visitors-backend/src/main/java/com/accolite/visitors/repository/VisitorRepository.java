package com.accolite.visitors.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.accolite.visitors.model.Visitor;

/**
 * @author Lavanya
 *
 */
@Repository
public interface VisitorRepository extends MongoRepository<Visitor, String>, VisitorDAL {

	@Override
	public void deleteById(String id);

}
