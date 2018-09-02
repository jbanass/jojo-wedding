<?php
    $code = $_GET["code"];

    $file = file_get_contents('../code.txt');

    if (strcmp($code, $file) == 0) {
        http_response_code(200);
        ECHO true;
    } else {
        http_response_code(200);
        ECHO false;
    }
?>