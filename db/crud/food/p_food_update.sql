DROP PROCEDURE IF EXISTS jojowedding.p_food_update;

DELIMITER //

CREATE PROCEDURE `p_food_update`
(
	in_food_id INT,
    in_food_name VARCHAR(100),
    in_food_description VARCHAR(255)
)
BEGIN
	UPDATE jojowedding.food
    SET food_description = in_food_description,
			food_name = in_food_name
    WHERE food_id = in_food_id;
END //