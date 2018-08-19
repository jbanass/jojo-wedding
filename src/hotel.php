<?php
    $servername = "localhost";
    $username = "user";
    $password = "pass";
    $database = "test";

    $conn = mysqli_connect($servername, $username, $password, $database);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $post_data = array();

    if ($result = $conn->query("SELECT * FROM hotel")) {
            while ($row = $result->fetch_assoc()) {
                $post_data['hot_id'] = $row['hot_id'];
                $post_data['hot_name'] = $row['hot_name'];
                $post_data['hot_address_1'] = $row['hot_address_1'];
                $post_data['hot_address_2'] = $row['hot_address_2'];
                $post_data['hot_address_3'] = $row['hot_address_3'];
                $post_data['hot_city'] = $row['hot_city'];
                $post_data['hot_state'] = $row['hot_state'];
                $post_data['hot_zip'] = $row['hot_zip'];
                $post_data['hot_phone'] = $row['hot_phone'];
                $post_data['hot_group_code'] = $row['hot_group_code'];
                $post_data['hot_url'] = $row['hot_url'];
            }
            $result->close();
            $conn->close();

            echo json_encode($post_data, JSON_FORCE_OBJECT);
        }
    } else {
        http_response_code(400);
    }
?>
