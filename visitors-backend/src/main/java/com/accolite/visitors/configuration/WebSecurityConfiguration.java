package com.accolite.visitors.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;

@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	OidcUserService oidcUserService;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

//		http.authorizeRequests().anyRequest().authenticated().and().oauth2Login().userInfoEndpoint()
//				.oidcUserService(oidcUserService);
		http.csrf().disable().authorizeRequests().antMatchers("/**").permitAll();
	}
}
