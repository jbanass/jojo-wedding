DROP PROCEDURE IF EXISTS jojowedding.p_rsvp_create;

DELIMITER //

CREATE PROCEDURE `p_rsvp_create`
(
	in_rsvp_id INT,
    in_song_id VARCHAR(255)
)
BEGIN
	INSERT INTO jojowedding.rsvp
    (
		rsvp_id,
        song_id
    )
    VALUES
    (
		in_reg_id,
        in_song_id
    );
END //