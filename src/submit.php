<?php
    $data = json_decode(file_get_contents('php://input'), true);

    //verify code exists
    $code = $data['validationCode'];

    $verification = file_get_contents('../code.txt');

    try {
        if (strcmp($code,$verification) == 0) {
            $conn = new PDO('mysql:dbname=jojowedding;host=localhost;', 'user', 'pass');
            $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

            //Create new RSVP row for this session
            $song_name = $data['songName'];
            $song_artist = $data['songArtist'];
            $first_name = $data['firstName'];
            $last_name = $data['lastName'];
            $amt_coming = $data['amtComing'];

            $sql = "INSERT INTO rsvp (song_name, song_artist, first_name, last_name, amt_coming) VALUES (?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);

            $stmt->execute([$song_name, $song_artist, $first_name, $last_name, $amt_coming]);
            $rsvp_id = $conn->lastInsertID();

            $created_ids = array();
            
            //now we've created the party, let's insert the people
            foreach ($data['people'] as $person) {
                $sql = "INSERT INTO person (per_first, per_last, coming, rsvp_id, food_id, food_notes) VALUES (?, ?, ?, ?, ?, ?)";
                $stmt = $conn->prepare($sql);

                $stmt->execute([$person['firstName'], $person['lastName'], $person['coming'], $rsvp_id, $person['food'], $person['foodNotes']]);
                $created_ids[] = $conn->lastInsertID();
            }
            
            http_response_code(200);
            die();
        } else {
            throw new Exception("Invalid verification code in payload", 100);
        }                   
    } catch (Exception $e) {
        echo json_encode(array(
            'error' => array(
                'msg' => $e->getMessage(),
                'code' => $e->getCode(),
            ),
        ));
        http_response_code(400);
        die();
    }
?>
