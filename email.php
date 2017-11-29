<?php

if($_POST)
{
    $to      = $_POST['email'];
    $subject = 'Favourites List';
    $message = $_POST['message'];
    $headers = 'From: w1497109@my.westminster.ac.uk' . "\r\n" .
        'Reply-To: w1497109@my.westminster.ac.uk' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    echo 'Email Sent.';
}

?>