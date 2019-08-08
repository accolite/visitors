package com.accolite.visitors.security.filter;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.accolite.visitors.security.respository.CustomAuthorizationRequestRepository;
import com.accolite.visitors.security.util.TokenUtils;
import com.nimbusds.jose.JOSEException;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

	@Autowired
	private CustomAuthorizationRequestRepository authorizationRequestRepository;

	@Autowired
	private TokenUtils tokenUtils;

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {

		log.info("Authentication Success");
		clearAuthenticationAttributes(request, response);
		String token;
		try {
			token = tokenUtils.createToken(authentication);
		} catch (JOSEException e) {
			log.error(e.getLocalizedMessage());
			response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return;
		}
		log.info("Generated Token: " + token);
		PrintWriter pw = response.getWriter();
		pw.write(token);
		pw.flush();
	}

	protected void clearAuthenticationAttributes(HttpServletRequest request, HttpServletResponse response) {
		authorizationRequestRepository.removeAuthorizationRequestCookies(request, response);
	}
}
