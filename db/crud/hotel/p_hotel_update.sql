DROP PROCEDURE IF EXISTS jojowedding.p_hotel_update;

DELIMITER //

CREATE PROCEDURE `p_hotel_update`
(
	in_hot_id INT,
    in_hot_name VARCHAR(255),
    in_hot_address_1 VARCHAR(255),
    in_hot_address_2 VARCHAR(255),
    in_hot_address_3 VARCHAR(255),
    in_hot_city VARCHAR(255),
    in_hot_state VARCHAR(50),
    in_hot_zip VARCHAR(12),
    in_hot_phone VARCHAR(12),
    in_hot_group_code VARCHAR(50),
    in_hot_url VARCHAR(255)
    
)
BEGIN
	UPDATE `jojowedding`.`hotel`
	SET `hot_name` = in_hot_name,
			`hot_address_1` = in_hot_address_1,
			`hot_address_2` = in_hot_address_2,
			`hot_address_3` = in_hot_address_3,
			`hot_city` = in_hot_city,
			`hot_state` = in_hot_state,
			`hot_zip` = in_hot_zip,
			`hot_phone` = in_hot_phone,
			`hot_group_code` = in_hot_group_code,
			`hot_url` = in_hot_url
	WHERE hot_id = in_hot_id;
END //