package com.accolite.auth.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.accolite.auth.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String>{

	User findByUsername(String username);
	
}