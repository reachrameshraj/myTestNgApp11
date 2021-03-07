<?php
include_once './config.php';

$formData = json_decode(file_get_contents('php://input'));
$title = mysqli_real_escape_string($conn,$formData->title);
$body = mysqli_real_escape_string($conn,$formData->body);

$message = new stdClass();

if(!empty($formData)){

    $query = "INSERT INTO posts(title, body) values('$title', '$body')";
    $result = mysqli_query($conn, $query);
    if($result){
        $message->code = 200;
        $message->severity = "success";
        $message->message = "Post successfully added";
    }else{
        
        $message->code = 500;
        $message->severity = "danger";
        $message->message = "Failed to add post";
        $message->details = mysqli_error($conn);
    }

echo json_encode($message);
}
