package com.accolite.visitors.repository;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;

@Repository
public class UploadRepositoryImpl implements UploadRepository {

	@Autowired
	private GridFsTemplate gridFsTemplate;

	@Override
	public String uploadFile(MultipartFile file, String title) throws IOException {
		
		DBObject metaData = new BasicDBObject();
		metaData.put("type", "image");
		metaData.put("title", title);
		
		Object imageId = gridFsTemplate.store(file.getInputStream(),
				file.getName(),
				file.getContentType(),
				metaData);
		
		return imageId.toString();
	}
	
	
	

}

