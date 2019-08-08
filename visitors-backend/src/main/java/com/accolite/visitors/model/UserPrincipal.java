package com.accolite.visitors.model;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.core.oidc.OidcUserInfo;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;

import lombok.ToString;

@ToString
public class UserPrincipal implements OidcUser, UserDetails {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7489959194644933681L;
	private String email;
	private String password;
	private Collection<? extends GrantedAuthority> authorities;
	private Map<String, Object> attributes;
	private OidcUserInfo userInfo;
	private OidcIdToken idToken;

	public static UserPrincipal create(User user) {
		return create(user, null);
	}

	public static UserPrincipal create(User user, Map<String, Object> attributes) {

		List<GrantedAuthority> authorities = user.getRoles().parallelStream()
				.map((role) -> new SimpleGrantedAuthority(role.toString())).collect(Collectors.toList());
		return new UserPrincipal(user.getEmail(), authorities);
	}

	public UserPrincipal(String email, Collection<? extends GrantedAuthority> authorities) {
		this.email = email;
		this.authorities = authorities;
		this.password = new String();
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {

		return authorities;
	}

	@Override
	public Map<String, Object> getAttributes() {
		return attributes;
	}

	@Override
	public String getName() {
		return null;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public Map<String, Object> getClaims() {
		return userInfo.getClaims();
	}

	@Override
	public OidcUserInfo getUserInfo() {
		return userInfo;
	}

	@Override
	public OidcIdToken getIdToken() {
		return idToken;
	}

	@Override
	public String getSubject() {
		return email;
	}

}
