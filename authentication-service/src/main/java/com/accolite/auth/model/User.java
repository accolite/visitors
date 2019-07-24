package com.accolite.auth.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Data;

@Document(collection = "users")
@Data
public class User {
	
	@Id
	private String id;
	
	private String name;
	
	private String username;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	
	private List<String> roles;
	
	public User(String name, String username, String password, List<String> roles) {
		this.name = name;
		this.username = username;
		this.password = password;
		this.roles = roles;
	}

}
