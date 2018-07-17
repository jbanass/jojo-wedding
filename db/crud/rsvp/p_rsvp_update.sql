DROP PROCEDURE IF EXISTS jojowedding.p_rsvp_update;

DELIMITER //

CREATE PROCEDURE `p_rsvp_update`
(
	in_rsvp_id INT,
    in_song_id VARCHAR(255)
)
BEGIN
	UPDATE jojowedding.rsvp
    SET song_id = in_song_id
    WHERE rsvp_id = in_rsvp_id;
END //