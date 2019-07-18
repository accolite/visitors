package com.accolite.visitors;
/**
 * 
 */

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author Lavanya
 *
 */
@SpringBootApplication
//@EnableMongoRepositories(basePackages = "com.accolite.visitors.repository")
public class VisitorApplication {

	public static void main(String[] args) {
		SpringApplication.run(VisitorApplication.class, args);
	}

//	@Override
//	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
//		return application.sources(VisitorApplication.class);
//	}

}
