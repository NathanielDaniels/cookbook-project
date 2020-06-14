<?php

echo "My first PHP script!";

echo "<pre>";
print_r($_POST);
echo "</pre>";

$message_sent = false;

if (isset($_POST['userEmail']) && $_POST['userEmail'] != '') {

    if (filter_var($_POST['userEmail'], FILTER_VALIDATE_EMAIL)) {
        $userName = $_POST['userName'];
        $userEmail = $_POST['userEmail'];
        $emailSubject = $_POST['emailSubject'];
        $emailMessage = $_POST['emailMessage'];

        $to = 'NathanielDaniels.dev@gmail.com';
        // $headers = "From: $email_from \r\n";
        $body = '';

        $body .= "from: '.$userName. ' /r/n";
        $body .= "Email: '.$userEmail. ' /r/n";
        $body .= "Subject: '.$emailSubject. ' /r/n";
        $body .= "Message: '.$emailMessage. ' /r/n";

        mail($to, $emailSubject, $body);

        $message_sent = true;

    }

}

?>















// if (!isset($_POST['submit'])) {
//     //*This Page should not bbe accessed Directly. Need to submit the form
//     echo "error; you need to submit the form!";
// }
// ;

// $name = $_POST['name'];
// $visitor_email = $_POST['email'];
// $message_subject = $_POST['subject'];
// $message = $_POST['message'];

//!Validate first
// if (empty($name) || empty($visitor_email)) {
//     echo "Please Enter Name and Email!";
//     exit;
// }

$email_from = "nathanielDaniels.dev@gmail.com";
$email_subject = $message_subject;
$email_body = "You have received a mesage from the user $name.\n" .
"email address: $visitor_email\n" .
"Here is the message:\n $message" .

$to = "nathanielDaniels.dev@gmail.com";
$headers = "From: $email_from \r\n";

//!Send the email!
// mail($to, $email_subject, $email_body, $headers);
// echo "Form Submitted"

// ?>
