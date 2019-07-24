package com.accolite.visitors.model;

import java.util.List;

import lombok.Data;

/**
 * 
 * @author Harshal
 *
 */

@Data
public class CustomPage {

	private long pageSize;

	private long pageNumber;

	private long total;

	private List<VisitorsView> data;

}