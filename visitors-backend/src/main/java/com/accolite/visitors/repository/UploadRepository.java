package com.accolite.visitors.repository;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.web.multipart.MultipartFile;

public interface UploadRepository {

	/**
	 * @param file
	 * @param id
	 * @return
	 * @throws IOException
	 */
	String uploadFile(MultipartFile file, String id) throws IOException;

	/**
	 * @param id
	 * @return
	 * @throws FileNotFoundException
	 */
	GridFsResource getFile(String id) throws FileNotFoundException;

}
