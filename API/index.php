<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

require_once "config/config.php";

$query = "SELECT * FROM tbl_estudiante";

$result = mysqli_query($conn, $query) or die("Select query failed");

$count = mysqli_num_rows($result);

if($count > 0){
    $row = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($row);
}else{
    echo json_encode(array("message" => "No user found", "status" => false));
}

?>
