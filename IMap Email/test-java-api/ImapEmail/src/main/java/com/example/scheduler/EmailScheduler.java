package com.example.scheduler;


import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.example.service.EmailReaderService;

@Component
public class EmailScheduler {

    private final EmailReaderService emailReaderService;

    public EmailScheduler(EmailReaderService emailReaderService) {
        this.emailReaderService = emailReaderService;
    }

    @Scheduled(fixedRate = 10000) // every 10secs
    public void fetchEmails() {
        System.out.println("Fetching emails...");
        emailReaderService.readEmails();
    }
}

