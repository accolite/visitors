package com.accolite.visitors.repository;

import java.io.IOException;

import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.web.multipart.MultipartFile;

public interface UploadRepository {

	String uploadFile(MultipartFile file, String title, String id) throws IOException;

	GridFsResource getFile(String id);
}
