<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization");

$data = json_decode(file_get_contents("php://input"), true);

$nombre = $data["nombre"];
$apellido = $data["apellido"];
$ocupacion = $data["ocupacion"];
$cedula = $data["cedula"];
$terminos = $data["terminos"];
$subscripcion = $data["subscripcion"];

require_once "../config/config.php";

$query = "INSERT INTO tbl_estudiante(nombre, apellido, ocupacion, cedula, terminos, subscripcion)
VALUES ('" . $nombre . "', '" . $apellido . "', '" . $ocupacion . "', '" . $cedula . "', '" . $terminos . "', '" . $subscripcion . "')";

echo json_encode(array($query));

if (mysqli_query($conn, $query) or die("Insert Query failed")) {
    echo json_encode(array("message" => "user inserted succesfully", "status" => true));
} else {
    echo json_encode(array("message" => "Failed user not ", "status" => false));
}
