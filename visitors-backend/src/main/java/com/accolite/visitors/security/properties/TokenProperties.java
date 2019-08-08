package com.accolite.visitors.security.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.Data;

@ConfigurationProperties(prefix = "app.security.token")
@Data
public class TokenProperties {

	private int expireSeconds;
	private String alias;
	private String path;
	private String type;
	private String password;

}
