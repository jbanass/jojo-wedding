<?php
    $code = $_GET["code"];

    $servername = "localhost";
    $username = "user";
    $password = "pass";
    $database = "test";

    $conn = mysqli_connect($servername, $username, $password, $database);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    if (strcmp($code, "test") == 0) {
        if ($result = $conn->query("SELECT id FROM test")) {
            while ($row = $result->fetch_assoc()) {
                ECHO $row["id"];
            }
            $result->close();
            $conn->close();
        }
    } else {
        http_response_code(400);
    }
?>