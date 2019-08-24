package com.accolite.visitors.repository;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.gridfs.GridFSBucket;
import com.mongodb.client.gridfs.GridFSBuckets;
import com.mongodb.client.gridfs.model.GridFSFile;

@Repository
public class UploadRepositoryImpl implements UploadRepository {

	@Autowired
	private GridFsTemplate gridFsTemplate;

	@Autowired
	private MongoDbFactory mongoDbFactory;

	@Override
	public String uploadFile(MultipartFile file, String id) throws IOException {

		DBObject metaData = new BasicDBObject();
		metaData.put("type", "image");
		metaData.put("visitorId", id);

		Object imageId = gridFsTemplate.store(file.getInputStream(), file.getName(), file.getContentType(), metaData);

		return imageId.toString();
	}

	@Override
	public GridFsResource getFile(String id) throws FileNotFoundException {

		GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("metadata.visitorId").is(id)));

		// GridFsResource gridFsResource = gridFsTemplate.getResource(file);
		if (file == null) {
			throw new FileNotFoundException("Image not found / Invalid visitor");
		}
		GridFsResource gridFsResource = new GridFsResource(file, getGridFs().openDownloadStream(file.getObjectId()));

		return gridFsResource;
	}

	private GridFSBucket getGridFs() {

		MongoDatabase db = mongoDbFactory.getDb();
		return GridFSBuckets.create(db);
	}

}
