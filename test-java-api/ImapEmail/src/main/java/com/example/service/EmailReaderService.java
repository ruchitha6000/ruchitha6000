package com.example.service;

import jakarta.mail.*;
import jakarta.mail.internet.MimeMultipart;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Properties;

@Service
public class EmailReaderService {

    @Value("${imap.host}")
    private String host;

    @Value("${imap.port}")
    private String port;

    @Value("${imap.username}")
    private String username;

    @Value("${imap.password}")
    private String password;

    @Value("${imap.protocol}")
    private String protocol;

    public void readEmails() {
        try {
            Properties properties = new Properties();
            properties.put("mail.store.protocol", protocol);
            properties.put("mail.imaps.host", host);
            properties.put("mail.imaps.port", port);
            properties.put("mail.imaps.ssl.enable", "true");

            Session session = Session.getInstance(properties);
            Store store = session.getStore(protocol);
            store.connect(host, username, password);

            Folder inbox = store.getFolder("INBOX");
            inbox.open(Folder.READ_ONLY);

            Message[] messages = inbox.getMessages();

            for (Message message : messages) {
                String subject = message.getSubject();
                Address[] from = message.getFrom();
                String body = getTextFromMessage(message);

                System.out.println("Subject: " + subject);
                System.out.println("From: " + from[0]);
                System.out.println("Body: " + body);
                System.out.println("--------------------------------------");
            }

            inbox.close(false);
            store.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private String getTextFromMessage(Message message) throws Exception {
        if (message.isMimeType("text/plain")) {
            return message.getContent().toString();
        } else if (message.isMimeType("multipart/*")) {
            MimeMultipart mimeMultipart = (MimeMultipart) message.getContent();
            return getTextFromMimeMultipart(mimeMultipart);
        }
        return "";
    }

    private String getTextFromMimeMultipart(MimeMultipart mimeMultipart) throws Exception {
        StringBuilder result = new StringBuilder();
        int count = mimeMultipart.getCount();
        for (int i = 0; i < count; i++) {
            BodyPart bodyPart = mimeMultipart.getBodyPart(i);
            if (bodyPart.isMimeType("text/plain")) {
                result.append(bodyPart.getContent());
            } else if (bodyPart.getContent() instanceof MimeMultipart) {
                result.append(getTextFromMimeMultipart((MimeMultipart) bodyPart.getContent()));
            }
        }
        return result.toString();
    }
}
