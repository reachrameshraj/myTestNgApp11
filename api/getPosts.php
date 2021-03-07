<?php
include_once './config.php';

$message = array();
$data = array();

$query = "SELECT * FROM posts";
$result = mysqli_query($conn, $query);
if($result){
    
    while($row = mysqli_fetch_assoc($result)){
        array_push($data, $row);
    }

    $message["code"] = 200;
    $message["severity"] = "success";
    $message["data"] = $data;
    $message["message"] = "Posts successfully retrived";
}else{
    
    $message["code"] = 500;
    $message["severity"] = "danger";
    $message["data"] = [];
    $message["message"] = "Failed to retrive posts";
    $message["details"] = mysqli_error($conn);
}

echo json_encode($message);
?>