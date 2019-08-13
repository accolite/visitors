package com.accolite.visitors.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.accolite.visitors.security.repository.UserRepository;
import com.accolite.visitors.security.user.User;
import com.accolite.visitors.security.user.UserPrincipal;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	public User getUserDetails(UserPrincipal principal) {
		return getUserDetails(principal.getUsername());
	}

	public User getUserDetails(String email) {
		return userRepository.findByEmail(email).orElse(null);
	}
}
