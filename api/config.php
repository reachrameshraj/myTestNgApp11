<?php
// error_reporting(0);
$servername = "localhost";
$username = "root";
$password = "";
$dabasename = "posts_ramesh";

// Create connection
$conn = mysqli_connect($servername,$username ,$password, $dabasename);
if (!$conn) {
    $dbMessage= array();
    $dbMessage['code']  = "404";
    $dbMessage['message']  = "Please configure database";
    $dbMessage['details'] = mysqli_connect_error();
    echo json_encode($dbMessage);
    die();
}
date_default_timezone_set("Asia/Calcutta");

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS");
header("Access-Control-Allow-Headers: X-Requested-With, content-type, Authorization");


?>