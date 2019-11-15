<?php
		//$to = "cristina.cjimenez@gmail.com";
		$to = "rjimenezb20@gmail.com";

		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];

		$body = "Message from " . $name . ", email: " . $email . ", text: " . $message;

		mail($to, "New web message", $body);


?>