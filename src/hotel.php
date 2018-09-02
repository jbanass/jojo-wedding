<?php
    try {
        $conn = new PDO('mysql:dbname=jojowedding;host=localhost;', 'user', 'pass');
        $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

        $rows = array();
        foreach ($conn->query("SELECT * FROM hotel") as $row) {
                $rows[] = $row;
        }

        $conn = null;

        print json_encode($rows);
     } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br />";
        die();
    }
?>