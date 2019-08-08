package com.accolite.visitors.security.filter;

import java.io.IOException;
import java.text.ParseException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.accolite.visitors.security.util.TokenUtils;
import com.nimbusds.jose.JOSEException;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class TokenAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	private TokenUtils tokenUtils;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		log.debug("In TokenAuthenticationFilter");
		String bearer = request.getHeader("Authorization");
		if (bearer != null && bearer.length() > 7 && bearer.startsWith("Bearer ")) {
			bearer = bearer.substring(7);
			log.debug("Token received: {}", bearer);
			try {
				UserDetails userDetails = tokenUtils.getPrincipalFromToken(bearer);
				if (userDetails != null) {
					UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
							userDetails, null, userDetails.getAuthorities());
					authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
					SecurityContextHolder.getContext().setAuthentication(authentication);
				}
			} catch (ParseException | JOSEException e) {
				log.debug("Invalid/Expired token: {}", e.getMessage());
			}

		}
		chain.doFilter(request, response);
	}

}
