<?php
    $data = json_decode(file_get_contents('php://input'), true);

    //verify code exists
    $code = $data['code'];

    $verification = file_get_contents('../code.txt');

    try {
        if (strcmp($code,$verification) == 0) {
            echo json_encode(array('result' => 'Successful code'));
            http_response_code(200);
            die();
        } else {
            throw new Exception("Invalid verification code in payload", 100);
        }

        $conn = new PDO('mysql:dbname=jojowedding;host=localhost;', 'user', 'pass');
        $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

        //Create new RSVP row for this session
        $song_name = $data['songName'];
        $song_artist = $data['songArtist'];

        $sql = "INSERT INTO rsvp (song_name, song_artist) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);

        $stmt.execute([$song_name, $song_artist]);
            
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
    

    // try {
        
        
    //     $conn = new PDO('mysql:dbname=jojowedding;host=localhost;', 'user', 'pass');
    //     $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

        
    
    //     $conn = null;
    
    //     ECHO "Finished!";
    //  } catch (PDOException $e) {
    //     print "Error!: " . $e->getMessage() . "<br />";
    //     die();
    // }
?>
