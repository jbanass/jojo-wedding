DROP PROCEDURE IF EXISTS jojowedding.p_setting_read;

DELIMITER //

CREATE PROCEDURE `p_setting_read`
(
	in_setting VARCHAR(10)
)
BEGIN
	SELECT *
    FROM jojowedding.setting
    WHERE setting = in_setting
    OR in_setting IS NULL;
END //