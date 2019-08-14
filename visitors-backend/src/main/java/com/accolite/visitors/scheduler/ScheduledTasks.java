/**
 * 
 */
package com.accolite.visitors.scheduler;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.accolite.visitors.service.VisitorService;

import lombok.extern.slf4j.Slf4j;

/**
 * @author Lavanya
 *
 */
@Component
@Slf4j
public class ScheduledTasks {

	@Autowired
	private VisitorService visitorService;

	private final DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd:mm:yyyy HH:mm:ss");

	@Scheduled(cron = "0 50 11 * * ?")
	public void getAndUpdateUnVisitedScheduledVisitJob() {

		log.info("Cron Task :: getAndUpdateUnVisitedScheduledVisit job -> Execution Time - {}",
				dateTimeFormatter.format(LocalDateTime.now()));
		visitorService.getAndUpdateUnVisitedScheduledVisits();
	}

	@Scheduled(cron = "0 50 11 * * ?")
	public void getAndUpdateUnCompletedVisitJob() {

		log.info("Cron Task :: getAndUpdateUnCompletedVisit job -> Execution Time - {}",
				dateTimeFormatter.format(LocalDateTime.now()));
		visitorService.getAndUpdateUnCompletedVisits();
	}

}
