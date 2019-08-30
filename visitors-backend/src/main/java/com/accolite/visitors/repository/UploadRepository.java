package com.accolite.visitors.repository;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

import org.springframework.data.mongodb.gridfs.GridFsResource;

public interface UploadRepository {

	/**
	 * @param inputStream
	 * @param id
	 * @return
	 * @throws IOException
	 */
	String uploadFile(InputStream inputStream, String id);

	/**
	 * @param id
	 * @return
	 * @throws FileNotFoundException
	 */
	GridFsResource getFile(String id) throws FileNotFoundException;

}
