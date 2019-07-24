package com.accolite.auth;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.accolite.auth.model.User;
import com.accolite.auth.repository.UserRepository;

@SpringBootApplication
public class AuthenticationServiceApplication implements CommandLineRunner{

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public static void main(String[] args) {
		SpringApplication.run(AuthenticationServiceApplication.class, args);
	}

	public void run(String... args) {
		if(userRepository.findByUsername("rahul") == null) {
			User user = new User("rahul kumar", "rahul", passwordEncoder.encode("rahul123"),
					Arrays.asList("ADMIN"));
			
			this.userRepository.save(user);
		}
	}
}
