DROP PROCEDURE IF EXISTS jojowedding.p_setting_update;

DELIMITER //

CREATE PROCEDURE `p_setting_update`
(
	in_setting VARCHAR(10),
    in_value VARCHAR(255),
    in_description VARCHAR(255)
)
BEGIN
	UPDATE jojowedding.setting
    SET value = in_value,
			description = in_description
    WHERE setting = in_setting;
END //