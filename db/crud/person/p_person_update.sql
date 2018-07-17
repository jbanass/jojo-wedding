DROP PROCEDURE IF EXISTS jojowedding.p_person_update;

DELIMITER //

CREATE PROCEDURE `p_person_update`
(
	in_person_id INT,
    in_first_name VARCHAR(50),
    in_last_name VARCHAR(50),
    in_title VARCHAR(25),
    in_rsvp_id INT,
    in_food_id INT,
    in_food_notes VARCHAR(255),
    in_person_notes VARCHAR(255)
)
BEGIN
	UPDATE jojowedding.person
    SET per_first = in_first_name,
			per_last = in_last_name,
            per_title = in_title,
            rsvp_id = in_rsvp_id,
            food_id = in_food_id,
            food_notes = in_food_notes,
            person_notes = in_person_notes
    WHERE per_id = in_person_id;
END //