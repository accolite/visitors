/**
 * 
 */
package com.accolite.visitors.model;

import java.io.Serializable;
import java.util.List;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import com.accolite.visitors.enums.VisitorType;

import lombok.Data;

/**
 * @author Lavanya
 *
 */
@Document(collection = "visitor")
@Data
public class Visitor implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	private String id;

	@Indexed
	@NotEmpty(message = "First Name is mandatory")
	@Size(max = 50)
	private String firstName;

	@Indexed
	@NotEmpty(message = "Last Name is mandatory")
	@Size(max = 50)
	private String lastName;

	@NotNull(message = "Phone Number is mandatory")
	private long phoneNumber;

	@Indexed(unique = true)
	@NotEmpty(message = "Email ID is mandatory")
	@Email
	private String emailId;

	// Aadhar or PAN or License etc.,
	@Size(max = 50)
	private String idType;

	@Indexed(sparse = true)
	@Size(max = 50)
	private String idNumber;

	// Employee or Guest
	private VisitorType visitorType;

	private List<VisitSummary> visitSummary;

}
