package com.accolite.visitors.repository;

import java.io.FileNotFoundException;
import java.io.InputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Repository;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.gridfs.model.GridFSFile;

@Repository
public class UploadRepositoryImpl implements UploadRepository {

	@Autowired
	private GridFsTemplate gridFsTemplate;

	@Override
	public String uploadFile(InputStream inputStream, String id) {

		DBObject metaData = new BasicDBObject();
		metaData.put("type", "image");
		metaData.put("visitorId", id);

		Object imageId = gridFsTemplate.store(inputStream,id, MediaType.IMAGE_JPEG_VALUE,metaData);

		return imageId.toString();
	}

	@Override
	public GridFsResource getFile(String id) throws FileNotFoundException {

		GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("metadata.visitorId").is(id)));

		if (file == null) {
			throw new FileNotFoundException("Image not found / Invalid visitor");
		}
		return gridFsTemplate.getResource(file);
	}

}
