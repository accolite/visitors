package com.accolite.visitors.model;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class Photo {

	@Id
	private int id;

	private String title;

	private Binary image;

}
