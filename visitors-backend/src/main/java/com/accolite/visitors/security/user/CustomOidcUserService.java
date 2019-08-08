package com.accolite.visitors.security.user;

import java.util.Arrays;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Service;

import com.accolite.visitors.security.enums.RoleType;
import com.accolite.visitors.security.respository.UserRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class CustomOidcUserService extends OidcUserService {

	@Autowired
	UserRepository userRepository;

	@Override
	public OidcUser loadUser(OidcUserRequest userRequest) throws OAuth2AuthenticationException {

		OidcUser oidcUser = super.loadUser(userRequest);
		log.info("OAuth2 Oidc User: {}", oidcUser);
		Optional<User> user = userRepository.findByEmail(oidcUser.getEmail());
		if (!user.isPresent()) {
			User newUser = new User();
			newUser.setEmail(oidcUser.getEmail());
			newUser.setRoles(Arrays.asList(RoleType.ROLE_USER));
			userRepository.save(newUser);
			user = Optional.of(newUser);
		}
		UserPrincipal userPrincipal = UserPrincipal.create(user.get());
		return userPrincipal;
	}

}