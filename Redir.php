$to      = 'myemail@email.com';
$subject = "New Message From Your Website";
$message = $_POST['message'];
$headers = 'From: ' . $_POST['name'] . ' <myemail@email.com>' . "\r\n" .
    'Reply-To: myemail@email.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

header('Location: contact-thank-you.php');
exit;
