DROP PROCEDURE IF EXISTS jojowedding.p_rsvp_delete;

DELIMITER //
CREATE PROCEDURE `p_rsvp_delete`
(
	in_rsvp_id int
)
BEGIN
	DELETE FROM jojowedding.rsvp
    WHERE rsvp_id = in_rsvp_id;
END //
