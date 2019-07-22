package com.accolite.visitors.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.accolite.visitors.service.UploadService;

@RestController
@RequestMapping(value = "/api-dev/visitor")
//@CrossOrigin(origins = "*")
public class UploadController {
	
	@Autowired
	private UploadService service;

	@PostMapping(value = "/add/photo/{id}")
	public ResponseEntity<String> uploadImage(
			@PathVariable("id") String id,
			@RequestParam("title") String title,
			@RequestParam("file") MultipartFile file) throws IOException, IllegalAccessException{
		
		System.out.println(title);
		String imageId = service.uploadFile(file, title, id);
		return new ResponseEntity<>(imageId, HttpStatus.OK);	
	}
	
}
