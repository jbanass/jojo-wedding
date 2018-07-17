DROP PROCEDURE IF EXISTS jojowedding.p_person_delete;

DELIMITER //
CREATE PROCEDURE `p_person_delete`
(
	in_person_id int
)
BEGIN
	DELETE FROM jojowedding.person
    WHERE per_id = in_person_id;
END //
