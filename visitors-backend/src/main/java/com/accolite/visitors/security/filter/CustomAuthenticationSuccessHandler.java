package com.accolite.visitors.security.filter;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import com.accolite.visitors.security.repository.CustomAuthorizationRequestRepository;
import com.accolite.visitors.security.util.CookieUtils;
import com.accolite.visitors.security.util.TokenUtils;
import com.nimbusds.jose.JOSEException;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class CustomAuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

	private static final String REDIRECT_URI_PARAM_COOKIE_NAME = "redirect_uri";

	@Autowired
	private CustomAuthorizationRequestRepository authorizationRequestRepository;

	@Autowired
	private TokenUtils tokenUtils;

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {

		log.debug("Authentication Success");
		try {
			String token = tokenUtils.createToken(authentication);
			log.debug("Generated Token: {}", token);
			String redirectUri = CookieUtils.getCookie(request, REDIRECT_URI_PARAM_COOKIE_NAME)
					.map(cookie -> CookieUtils.deserialize(cookie, String.class)).orElse(null);
			if (redirectUri == null) {
				log.debug("No redirect uri in request");
				response.sendError(HttpServletResponse.SC_BAD_REQUEST);
				return;
			}
			log.debug("Redirect url: {}", redirectUri);
			clearAuthenticationAttributes(request, response);
			String url = UriComponentsBuilder.fromHttpUrl(redirectUri).queryParam("token", token).build().toUriString();
			log.debug("Redirect url: {}", url);
			response.sendRedirect(url);
		} catch (JOSEException e) {
			log.error("Token creation error {}", e.getLocalizedMessage());
			response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
		}
	}

	protected void clearAuthenticationAttributes(HttpServletRequest request, HttpServletResponse response) {
		authorizationRequestRepository.removeAuthorizationRequestCookies(request, response);
	}
}
