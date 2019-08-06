package com.accolite.visitors.configuration;

import javax.servlet.Filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.client.web.AuthorizationRequestRepository;
import org.springframework.security.oauth2.core.endpoint.OAuth2AuthorizationRequest;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.accolite.visitors.advice.CustomAuthenticationEntryPoint;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	private OidcUserService oidcUserService;

	@Autowired
	private AuthenticationSuccessHandler successHandler;

	@Autowired
	private Filter tokenAuthenticationFilter;

	@Autowired
	private AuthorizationRequestRepository<OAuth2AuthorizationRequest> requestRepository;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.cors().and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().csrf()
				.disable().formLogin().disable().httpBasic().disable().exceptionHandling()
				.authenticationEntryPoint(new CustomAuthenticationEntryPoint()).and().authorizeRequests()
				.antMatchers("/oauth2/**", "/favicon.ico").permitAll().anyRequest().authenticated().and().oauth2Login()
				.authorizationEndpoint().authorizationRequestRepository(requestRepository).and().userInfoEndpoint()
				.oidcUserService(oidcUserService).and().successHandler(successHandler);
		http.addFilterBefore(tokenAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
	}
}
