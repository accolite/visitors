package com.accolite.visitors.security.configuration;

import java.io.IOException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;

import javax.servlet.Filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.client.web.AuthorizationRequestRepository;
import org.springframework.security.oauth2.core.endpoint.OAuth2AuthorizationRequest;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.accolite.visitors.security.exception.CustomAuthenticationEntryPoint;
import com.accolite.visitors.security.properties.TokenProperties;
import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.crypto.RSASSASigner;
import com.nimbusds.jose.crypto.RSASSAVerifier;
import com.nimbusds.jose.jwk.RSAKey;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
@EnableConfigurationProperties(TokenProperties.class)
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	private OidcUserService oidcUserService;

	@Autowired
	private AuthenticationSuccessHandler successHandler;

	@Autowired
	private AuthenticationFailureHandler failureHandler;

	@Autowired
	private Filter tokenAuthenticationFilter;

	@Autowired
	private AuthorizationRequestRepository<OAuth2AuthorizationRequest> requestRepository;

	@Autowired
	private TokenProperties tokenProperties;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.cors().and().csrf().disable().formLogin().disable().httpBasic().disable().sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().exceptionHandling()
				.authenticationEntryPoint(new CustomAuthenticationEntryPoint()).and().authorizeRequests()
				.antMatchers("/oauth2/**", "/favicon.ico", "/error", "/v2/api-docs", "/configuration/ui",
						"/swagger-resources/**", "/configuration/**", "/swagger-ui.html", "/webjars/**",
						"/api-dev/visitor/approvalResponse", "/api-dev/visitor/notifyResponse", "/visitor/**")
				.permitAll().anyRequest().authenticated().and().oauth2Login().authorizationEndpoint()
				.authorizationRequestRepository(requestRepository).and().userInfoEndpoint()
				.oidcUserService(oidcUserService).and().successHandler(successHandler).failureHandler(failureHandler)
				.and().addFilterBefore(tokenAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
	}

	@Bean
	public RSAKey rsaKey()
			throws NoSuchAlgorithmException, CertificateException, IOException, KeyStoreException, JOSEException {
		KeyStore keyStore = KeyStore.getInstance(tokenProperties.getType());
		keyStore.load(new ClassPathResource(tokenProperties.getPath()).getInputStream(),
				tokenProperties.getPassword().toCharArray());
		return RSAKey.load(keyStore, tokenProperties.getAlias(), tokenProperties.getPassword().toCharArray());
	}

	@Bean
	@DependsOn(value = "rsaKey")
	public RSASSASigner signer(@Autowired RSAKey rsaKey) throws KeyStoreException, JOSEException {
		return new RSASSASigner(rsaKey);
	}

	@Bean
	@DependsOn(value = "rsaKey")
	RSASSAVerifier verifier(@Autowired RSAKey rsaKey) throws KeyStoreException, JOSEException {
		return new RSASSAVerifier(rsaKey);
	}
}
