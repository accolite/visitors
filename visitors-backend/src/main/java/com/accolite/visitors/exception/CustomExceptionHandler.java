/**
 * 
 */
package com.accolite.visitors.exception;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.accolite.visitors.util.ErrorResponse;

/**
 * @author Lavanya
 *
 */
@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(Exception.class)
	public final ResponseEntity<Object> handleAllExceptions(Exception ex, WebRequest request) {
		List<String> details = new ArrayList<String>();
		details.add(ex.getLocalizedMessage());
		ErrorResponse errorResponse = new ErrorResponse();
		errorResponse.setTimestamp(LocalDateTime.now());
		errorResponse.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
		errorResponse.setMessage(ex.getMessage());
		return new ResponseEntity<Object>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@ExceptionHandler({ VisitorNotFoundException.class, VisitSummaryNotFoundException.class })
	public final ResponseEntity<Object> handleVisitorNotFoundException(VisitorNotFoundException ex,
			WebRequest request) {
		List<String> details = new ArrayList<>();
		details.add(ex.getLocalizedMessage());
		ErrorResponse errorResponse = new ErrorResponse();
		errorResponse.setTimestamp(LocalDateTime.now());
		errorResponse.setStatus(HttpStatus.NOT_FOUND);
		errorResponse.setMessage(ex.getMessage());
		return new ResponseEntity<Object>(errorResponse, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler({ IllegalArgumentException.class, IllegalStateException.class, DuplicateKeyException.class })
	protected ResponseEntity<Object> handleConflict(RuntimeException ex, WebRequest request) {
		ErrorResponse errorResponse = new ErrorResponse();
		errorResponse.setTimestamp(LocalDateTime.now());
		errorResponse.setStatus(HttpStatus.CONFLICT);
		errorResponse.setMessage("Duplicate key found.");
		// errorResponse.setMessage(ex.getMessage());
		return new ResponseEntity<Object>(errorResponse, HttpStatus.CONFLICT);
	}

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		List<String> details = new ArrayList<>();
		for (ObjectError errorResponse : ex.getBindingResult().getAllErrors()) {
			details.add(errorResponse.getDefaultMessage());
		}
		ErrorResponse errorResponse = new ErrorResponse();
		errorResponse.setTimestamp(LocalDateTime.now());
		errorResponse.setStatus(HttpStatus.BAD_REQUEST);
		errorResponse.setMessage(ex.getMessage());
		return new ResponseEntity<Object>(errorResponse, HttpStatus.BAD_REQUEST);
	}

}
