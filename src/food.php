<?php

try {
    $conn = new PDO('mysql:dbname=jojowedding;host=localhost;', 'user', 'pass');
    $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $rows = array();
    foreach ($conn->query("SELECT * FROM food") as $row) {
            $rows[] = $row;
    }

    $conn = null;

    echo '<pre>'; print_r($rows); echo '</pre>';
 } catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br />";
    die();
}

?>