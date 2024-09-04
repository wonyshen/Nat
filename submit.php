<?php
    require_once 'swiftmailer/autoload.php';
    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    

    $to = "hello@natthandavis.com";
    $subject = "Contact Form ".$_SERVER['HTTP_HOST'];
    $msg = '<strong>Name</strong>:'.$name.'<br><strong>Company</strong>:'.$company.'<br><strong>Email</strong>:'.$email.'<br><strong>Message</strong>:'.$message;

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <hello@natthandavis.com>' . "\r\n";

    $kq = mail($to, $subject, $msg, $headers);
    print_r($kq);
    die;
?>
