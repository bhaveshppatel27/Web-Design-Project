<%@ page import="java.io.*,java.util.*,javax.mail.*"%>
<%@ page import="javax.*,org.apache.*,javax.activation.*"%>
<%@ page import="org.apache.commons.mail.*"%>
<%@ page import="javax.mail.internet.MimeMessage,javax.mail.internet.InternetAddress,javax.mail.Transport,javax.mail.Session,javax.mail.PasswordAuthentication,javax.mail.MessagingException,javax.mail.Message"%>
<%
   
final String toEmail = request.getParameter("q");
		final String username = "ilovedc27@gmail.com";
		final String password = "Dollar2727";
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");
		out.print(toEmail);
		Session session1 = Session.getInstance(props,
		  new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		  });

		try {

			Message message = new MimeMessage(session1);
			message.setFrom(new InternetAddress(username));
			message.setRecipients(Message.RecipientType.TO,
				InternetAddress.parse(toEmail));
			message.setSubject("ShowBazaar Subscription");
			message.setText("Dear Customer,"
				+ "\n\n Thank you for subscribing to our newsletters!!\n Stay tuned for latest updates.\n\nRegards,\nShowBazaar Team");

			Transport.send(message);

			

		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}
		%>