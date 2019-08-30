package com.accolite.visitors.service;

import java.io.ByteArrayInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.stereotype.Service;

import com.accolite.visitors.repository.UploadRepository;

@Service
public class UploadServiceImpl implements UploadService {

	@Autowired
	private UploadRepository repository;

	@Autowired
	private VisitorService visitorService;

	@Override
	public String uploadFile(String file, String id) throws IllegalAccessException {

		byte[] byteArray = Base64.decodeBase64(file.getBytes());
		InputStream is = new ByteArrayInputStream(byteArray);
		String imageId = repository.uploadFile(is, id);

		// Add Image Id to the visitor Details
		// Can be removed if not required since we are having reference of
		// visitor in the image collection itself
		Map<String, Object> visitorMap = new HashMap<>();
		visitorMap.put("imageId", imageId);
		visitorService.updateVisitorDetails(id, visitorMap);

		return imageId;
	}

	@Override
	public GridFsResource getFile(String id) throws FileNotFoundException {

		return repository.getFile(id);
	}

}
