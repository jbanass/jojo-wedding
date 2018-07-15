DROP PROCEDURE IF EXISTS jojowedding.p_food_delete;

DELIMITER //
CREATE PROCEDURE `p_food_delete`
(
	in_food_id int
)
BEGIN
	DELETE FROM jojowedding.food
    WHERE food_id = in_food_id;
END //
