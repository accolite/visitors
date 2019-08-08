package com.accolite.visitors.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.accolite.visitors.model.User;

public interface UserRepository extends MongoRepository<User, String> {

	public Optional<User> findByEmail(String email);

}