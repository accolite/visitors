package com.accolite.auth;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.accolite.auth.model.Role;
import com.accolite.auth.model.User;
import com.accolite.auth.repository.RoleRepository;
import com.accolite.auth.repository.UserRepository;

@SpringBootApplication
public class AuthenticationServiceApplication implements CommandLineRunner{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public static void main(String[] args) {
		SpringApplication.run(AuthenticationServiceApplication.class, args);
	}

	public void run(String... args) {
		
		addRole();
		List<Role> roles = roleRepository.findAll();
		
		if(userRepository.findByUsername("rahul") == null) {
			User user = new User(null, "rahul kumar", "rahul", passwordEncoder.encode("rahul123"), roles);
			
			this.userRepository.save(user);
		}
	}

	private void addRole() {
		if(roleRepository.findByRole("ADMIN") == null) {
			this.roleRepository.save(new Role(null, "ADMIN", "Admin"));
		} 
		if(roleRepository.findByRole("USER") == null) {
			this.roleRepository.save(new Role(null, "USER", "User"));
		}		
	}
}
