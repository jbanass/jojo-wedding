<?php
$servername = "localhost";
$username = "user";
$password = "pass";
$database = "jojowedding";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($result = $conn->query("SELECT * FROM food")) {

    $rows = array();

    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    $result->close();
    $conn->close();

    ECHO json_encode($rows);
}

?>