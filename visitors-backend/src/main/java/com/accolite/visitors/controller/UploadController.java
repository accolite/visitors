package com.accolite.visitors.controller;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.visitors.service.UploadService;

@RestController
@RequestMapping(value = "/api-dev/visitor")
public class UploadController {

	@Autowired
	private UploadService service;

	/**
	 * Upload photo in MongoDB and update the imageId in the visitor collection
	 *
	 * @param id
	 * @param base64String
	 * @return
	 * @throws IOException
	 * @throws IllegalAccessException
	 */
	@PostMapping(value = "/add/photo/{id}")
	public ResponseEntity<String> uploadImage(@PathVariable("id") String id, @RequestBody String base64String)
			throws IOException, IllegalAccessException {

		String imageId = service.uploadFile(base64String, id);
		return new ResponseEntity<>(imageId, HttpStatus.OK);
	}

	/**
	 * Retrieve image for the particular visitor
	 *
	 * @param id
	 * @return
	 * @throws FileNotFoundException
	 */
	@GetMapping(value = "/get/photo/{id}")
	public ResponseEntity<Resource> getImage(@PathVariable("id") String id) throws FileNotFoundException {

		GridFsResource gridFsResource = service.getFile(id);

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.parseMediaType(gridFsResource.getContentType()));

		return new ResponseEntity<>(gridFsResource, headers, HttpStatus.OK);
	}

	// Just for reference
//	@GetMapping(value = "/get/photo/{id}")
//	public ResponseEntity<Resource> getImage(@PathVariable("id") String id) {
//
//		GridFsResource gridFsResource = service.getFile(id);
//		return new ResponseEntity<>(gridFsResource, HttpStatus.OK);
//	}

}
