package com.accolite.visitors.service;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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
		String imageId = repository.uploadFile(file, title);
		
		//Add Image Id to the visitor Details
		Map<String, Object> visitorMap = new HashMap<>();
		visitorMap.put("imageId", imageId);
		visitorService.updateVisitorDetails(id, visitorMap);
		
		return imageId;
	}

}
