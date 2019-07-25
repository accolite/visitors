package com.accolite.auth.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.accolite.auth.model.Role;

@Repository
public interface RoleRepository extends MongoRepository<Role, String>{

	Role findByRole(String role);
	
}
