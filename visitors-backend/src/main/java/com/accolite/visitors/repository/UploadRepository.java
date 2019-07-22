package com.accolite.visitors.repository;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public interface UploadRepository {

	String uploadFile(MultipartFile file, String title) throws IOException;

}
