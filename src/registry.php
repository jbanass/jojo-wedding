<?php
    $servername = "localhost";
    $username = "user";
    $password = "pass";
    $database = "jojowedding";

    $conn = mysqli_connect($servername, $username, $password, $database);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $post_data = array();

    if ($result = $conn->query("SELECT * FROM `registry`")) {
            while ($row = $result->fetch_assoc()) {
                $post_data[$row['reg_id']] = array();
                $post_data[$row['reg_id']]['reg_id'] = $row['reg_id'];
                $post_data[$row['reg_id']]['reg_url'] = $row['reg_url'];
                $post_data[$row['reg_id']]['reg_icon'] = $row['reg_icon'];
            }
            $result->close();
            $conn->close();

            echo json_encode($post_data);
        } else {
        http_response_code(400);
    }
?>
