package com.accolite.auth.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.accolite.auth.model.User;
import com.accolite.auth.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService{

	@Autowired
	private UserRepository UserRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User dbUser = UserRepository.findByUsername(username); 
		
		if(dbUser == null) {
			throw new UsernameNotFoundException(String.format("Username %s not found", username));
	 
		} else {
			List<GrantedAuthority> grantedAuthorities = dbUser.getRoles()
																.stream()
																.map(role -> new SimpleGrantedAuthority(role.getRole()))
																.collect(Collectors.toList());
		
			org.springframework.security.core.userdetails.User user = 
					new org.springframework.security.core.userdetails.User(dbUser.getUsername(), 
							dbUser.getPassword(), grantedAuthorities);
			
			return user;
		}
		
	}

}
