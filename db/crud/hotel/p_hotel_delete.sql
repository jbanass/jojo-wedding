DROP PROCEDURE IF EXISTS jojowedding.p_hotel_delete;

DELIMITER //
CREATE PROCEDURE `p_hotel_delete`
(
	in_hot_id int
)
BEGIN
	DELETE FROM jojowedding.hotel
    WHERE hot_id = in_hot_id;
END //
