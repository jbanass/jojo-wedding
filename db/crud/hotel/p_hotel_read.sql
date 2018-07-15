DROP PROCEDURE IF EXISTS jojowedding.p_hotel_read;

DELIMITER //

CREATE PROCEDURE `p_hotel_read`
(
	in_hot_id INT
)
BEGIN
	SELECT *
    FROM jojowedding.hotel
    WHERE hot_id = in_hot_id
    OR in_hot_id IS NULL;
END //