package com.accolite.visitors.service;

import java.io.FileNotFoundException;
import java.io.IOException;

public interface UploadService {

	/**
	 * @param file
	 * @param id
	 * @return
	 * @throws IOException
	 * @throws IllegalAccessException
	 */
	String uploadFile(String file, String id) throws IOException, IllegalAccessException;

	/**
	 * @param id
	 * @return
	 * @throws FileNotFoundException
	 */
	String getFile(String id) throws IOException;

}
