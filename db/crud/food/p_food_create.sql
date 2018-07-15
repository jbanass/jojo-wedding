DROP PROCEDURE IF EXISTS jojowedding.p_food_create;

DELIMITER //

CREATE PROCEDURE `p_food_create`
(
	in_food_id INT,
    in_food_name VARCHAR(100),
    in_food_description VARCHAR(255)
)
BEGIN
	INSERT INTO jojowedding.food
    (
		food_id,
        food_name,
        food_description
    )
    VALUES
    (
		in_food_id,
        in_food_name,
        in_food_description
    );
END //