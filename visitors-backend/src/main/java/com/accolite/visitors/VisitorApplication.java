package com.accolite.visitors;
/**
 * 
 */

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * @author Lavanya
 *
 */
@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.accolite.visitors.dao")
public class VisitorApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(VisitorApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(VisitorApplication.class);
	}

}
