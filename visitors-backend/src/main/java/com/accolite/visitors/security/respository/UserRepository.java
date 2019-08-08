package com.accolite.visitors.security.respository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.accolite.visitors.security.user.User;

public interface UserRepository extends MongoRepository<User, String> {

	public Optional<User> findByEmail(String email);

}