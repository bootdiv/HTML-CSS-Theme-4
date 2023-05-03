<?php
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$date = $_POST["date"];
$time = $_POST["time"];
$service = $_POST["service"];
$like = $_POST["like"];
$locatiom = $_POST["locatiom"];
 
$EmailTo = "customercare@parkavecosmetic.com";
$Subject = "Book Now";
 
// prepare email body text
$Body .= "First Name: ";
$Body .= $fname;
$Body .= "\n";

$Body .= "Last Name: ";
$Body .= $lname;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "Phone: ";
$Body .= $phone;
$Body .= "\n";
 
$Body .= "Date: ";
$Body .= $date;
$Body .= "\n";
 
$Body .= "Time: ";
$Body .= $time;
$Body .= "\n";
 
$Body .= "Service: ";
$Body .= $service;
$Body .= "\n";
 
$Body .= "Like: ";
$Body .= $like;
$Body .= "\n";
 
$Body .= "Location: ";
$Body .= $location;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 
?>
