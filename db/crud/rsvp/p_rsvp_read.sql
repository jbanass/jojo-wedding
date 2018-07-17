DROP PROCEDURE IF EXISTS jojowedding.p_rsvp_read;

DELIMITER //

CREATE PROCEDURE `p_rsvp_read`
(
	in_rsvp_id INT
)
BEGIN
	SELECT *
    FROM jojowedding.rsvp
    WHERE rsvp_id = in_rsvp_id
    OR in_rsvp_id IS NULL;
END //