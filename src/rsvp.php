<?php
    $code = $_GET["code"];

    if (strcmp($code, "test") == 0) {
        ECHO "Successful code";
    } else {
        http_response_code(400);
    }
?>