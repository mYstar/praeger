<?php

// Only process POST reqeusts.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Get the form fields and remove whitespace.
	$betreff = trim($_POST["betreff"]);
	$lname = trim($_POST["lname"]);
	$fname = trim($_POST["fname"]);
	$phone = trim($_POST["phone"]);
	$nachricht = trim($_POST["nachricht"]);
	$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

	// Check that data was sent to the mailer.
	if ( empty($lname) OR empty($nachricht) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
		// Set a 400 (bad request) response code and exit.
		http_response_code(400);
		echo "Das Formular wurde nicht komplett ausgefüllt. Bitte versuchen Sie es noch einmal.";
		exit;
	}

	// Set the recipient email address.
	$recipient = "eric_st@web.de";

	// Set the email subject.
	$subject = "Kontaktformular Präger-Haustechnik.de: $betreff";

	// Build the email content.
	$email_content = "Name: $fname $lname\n";
	$email_content .= "E-Mail: $email\n\n";
	$email_content .= "Nachricht:\n$nachricht\n";

	// Build the email headers.
	$email_headers = "From: $fname $lname <$email>";

	// Send the email.
	if (mail($recipient, $subject, $email_content, $email_headers)) {
		// Set a 200 (okay) response code.
		http_response_code(200);
		echo "Vielen Dank für Ihre Nachricht. Wir setzen uns so bald wie möglich mit Ihnen in Verbindung.";
	} else {
		// Set a 500 (internal server error) response code.
		http_response_code(500);
		echo "Leider konnte wegen eines internen Fehlers die Nachricht nicht gesendet werden. Bitte versuchen Sie es später noch einmal oder senden Sie eine E-Mail an: $recipient";
	}

} else {
	// Not a POST request, set a 403 (forbidden) response code.
	http_response_code(403);
	echo "Es gab ein Problem mit Ihrer Anfrage. Bitte senden Sie diese noch einmal";
}

?>
