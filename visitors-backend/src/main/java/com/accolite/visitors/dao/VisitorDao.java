/**
 * 
 */
package com.accolite.visitors.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.accolite.visitors.model.Visitor;

/**
 * @author Lavanya
 *
 */
@Repository
public interface VisitorDao extends MongoRepository<Visitor, Integer> {

}
