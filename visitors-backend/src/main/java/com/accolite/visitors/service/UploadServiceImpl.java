package com.accolite.visitors.service;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.accolite.visitors.repository.UploadRepository;

@Service
public class UploadServiceImpl implements UploadService{

	@Autowired
	private UploadRepository repository;
	
	@Autowired
	private VisitorService visitorService;
	
	@Override
	public String uploadFile(MultipartFile file, String title, String id) throws IOException, IllegalAccessException {
		String imageId = repository.uploadFile(file, title, id);
		
		//Add Image Id to the visitor Details
		//Can be removed if not required since we are having reference of 
		//visitor in the image collection itself
		Map<String, Object> visitorMap = new HashMap<>();
		visitorMap.put("imageId", imageId);
		visitorService.updateVisitorDetails(id, visitorMap);
		
		return imageId;
	}

	@Override
	public GridFsResource getFile(String id) {
		return repository.getFile(id);
	}
	
}
