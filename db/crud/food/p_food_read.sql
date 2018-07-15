DROP PROCEDURE IF EXISTS jojowedding.p_food_read;

DELIMITER //

CREATE PROCEDURE `p_food_read`
(
	in_food_id INT
)
BEGIN
	SELECT *
    FROM jojowedding.food
    WHERE food_id = in_food_id
    OR in_food_id IS NULL;
END //