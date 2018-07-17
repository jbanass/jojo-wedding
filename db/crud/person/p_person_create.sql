DROP PROCEDURE IF EXISTS jojowedding.p_person_create;

DELIMITER //

CREATE PROCEDURE `p_food_create`
(
	in_food_id INT,
    in_first_name VARCHAR(50),
    in_last_name VARCHAR(50),
    in_title VARCHAR(25),
    in_rsvp_id INT,
    in_food_id INT,
    in_food_notes VARCHAR(255),
    in_person_notes VARCHAR(255)
)
BEGIN
	INSERT INTO jojowedding.person
    (
		per_id,
        per_first,
        per_last,
        per_title,
        rsvp_id,
        food_id,
        food_notes,
        person_notes
    )
    VALUES
    (
		in_person_id,
        in_first_name,
        in_last_name,
        in_title,
        in_rsvp_id,
        in_food_id,
        in_food_notes,
        in_person_notes
    );
END //