package com.accolite.visitors.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.visitors.security.service.UserService;
import com.accolite.visitors.security.user.User;
import com.accolite.visitors.security.user.UserPrincipal;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping(value = "/api-dev/user")
@Slf4j
public class UserController {

	@Autowired
	UserService userService;

	@GetMapping(value = "/me")
	@Secured({ "ROLE_USER" })
	public ResponseEntity<?> user(@AuthenticationPrincipal UserPrincipal principal) {
		log.debug("User Principal {}", principal);
		User user = userService.getUserDetails(principal);
		log.debug("User {}", user);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

	@GetMapping(value = "/email/{email}")
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<?> user(@PathVariable("email") String email) {
		log.debug("email {}", email);
		User user = userService.getUserDetails(email);
		log.debug("User {}", user);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
}
