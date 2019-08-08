package com.accolite.visitors;
/**
 * 
 */

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.accolite.visitors.security.properties.TokenProperties;

/**
 * @author Lavanya
 *
 */
@SpringBootApplication
@EnableConfigurationProperties(TokenProperties.class)
public class VisitorApplication {

	public static void main(String[] args) {
		SpringApplication.run(VisitorApplication.class, args);
	}

}
