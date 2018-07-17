DROP PROCEDURE IF EXISTS jojowedding.p_person_read;

DELIMITER //

CREATE PROCEDURE `p_person_read`
(
	in_person_id INT
)
BEGIN
	SELECT `person`.`per_id`,
    `person`.`per_first`,
    `person`.`per_last`,
    `person`.`per_title`,
    `person`.`rsvp_id`,
    `person`.`food_id`,
    `person`.`food_notes`,
    `person`.`person_notes`
FROM `jojowedding`.`person`
WHERE per_id = in_person_id
OR in_person_id IS NULL;
END //


