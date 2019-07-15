/**
 * 
 */
package com.accolite.visitors.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Lavanya
 *
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class VisitorNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public VisitorNotFoundException(String message) {
		super(message);
	}

}
