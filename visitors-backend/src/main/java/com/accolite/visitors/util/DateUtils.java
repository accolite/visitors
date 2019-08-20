/**
 * 
 */
package com.accolite.visitors.util;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.util.Date;

/**
 * @author Lavanya
 *
 */
public final class DateUtils {

	private DateUtils() {
	}

	/**
	 * @param date
	 * @return
	 */
	public static Date atStartOfDay(Date date) {
		LocalDateTime localDateTime = dateToLocalDateTime(date);
		LocalDateTime startOfDay = localDateTime.with(LocalTime.MIN);
		return localDateTimeToDate(startOfDay);
	}

	/**
	 * @param date
	 * @return
	 */
	public static Date atEndOfDay(Date date) {
		LocalDateTime localDateTime = dateToLocalDateTime(date);
		LocalDateTime endOfDay = localDateTime.with(LocalTime.MAX);
		return localDateTimeToDate(endOfDay);
	}

	/**
	 * @param date
	 * @return
	 */
	public static Date atSpecificTimeOfDay(Date date) {
		LocalDateTime localDateTime = dateToLocalDateTime(date);
		LocalDateTime specificTimeOfDay = localDateTime.with(LocalTime.MAX.minusMinutes(30));
		return localDateTimeToDate(specificTimeOfDay);
	}

	/**
	 * @param date
	 * @return
	 */
	private static LocalDateTime dateToLocalDateTime(Date date) {
		return LocalDateTime.ofInstant(date.toInstant(), ZoneId.systemDefault());
	}

	/**
	 * @param localDateTime
	 * @return
	 */
	private static Date localDateTimeToDate(LocalDateTime localDateTime) {
		return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
	}

}
