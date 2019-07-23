package com.accolite.visitors.service;

import java.io.IOException;

import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.web.multipart.MultipartFile;

public interface UploadService {

	String uploadFile(MultipartFile file, String title, String id) throws IOException, IllegalAccessException;
	
	GridFsResource getFile(String id);

}
