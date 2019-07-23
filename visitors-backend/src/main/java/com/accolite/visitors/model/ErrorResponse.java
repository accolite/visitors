/**
 * 
 */
package com.accolite.visitors.model;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

/**
 * @author Lavanya
 *
 */
@Data
public class ErrorResponse {

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
	private LocalDateTime timestamp;

	private HttpStatus status;

	private String message;

}
