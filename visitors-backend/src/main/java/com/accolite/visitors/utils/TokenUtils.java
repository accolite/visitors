package com.accolite.visitors.utils;

import java.util.Arrays;
import java.util.Date;
import java.util.stream.Collectors;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.accolite.visitors.model.UserPrincipal;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class TokenUtils {

	public static String createToken(Authentication authentication) {
		UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
		log.info("Principal " + authentication);
		Date now = new Date();
		Date expiryDate = new Date(now.getTime() + 30 * 60 * 1000);

		return Jwts.builder().setSubject(userPrincipal.getSubject()).setIssuedAt(new Date()).setExpiration(expiryDate)
				.claim("roles",
						userPrincipal.getAuthorities().stream().map(GrantedAuthority::getAuthority)
								.collect(Collectors.joining(",")))
				// TODO Read key from file
				.signWith(SignatureAlgorithm.HS512, "ABCD").compact();
	}

	public static UserPrincipal getPrincipalFromToken(String authToken) {
		try {
			// TODO Read key from file
			Claims claims = Jwts.parser().setSigningKey("ABCD").parseClaimsJws(authToken).getBody();
			return new UserPrincipal(claims.getSubject(), Arrays.stream(claims.get("roles").toString().split(","))
					.map(SimpleGrantedAuthority::new).collect(Collectors.toList()));
		} catch (SignatureException ex) {
			log.error("Invalid JWT signature");
		} catch (MalformedJwtException ex) {
			log.error("Invalid JWT token");
		} catch (ExpiredJwtException ex) {
			log.error("Expired JWT token");
		} catch (UnsupportedJwtException ex) {
			log.error("Unsupported JWT token");
		} catch (IllegalArgumentException ex) {
			log.error("JWT claims string is empty.");
		}
		return null;
	}

}
