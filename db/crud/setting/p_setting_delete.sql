DROP PROCEDURE IF EXISTS jojowedding.p_setting_delete;

DELIMITER //
CREATE PROCEDURE `p_setting_delete`
(
	in_setting VARCHAR(10)
)
BEGIN
	DELETE FROM jojowedding.setting
    WHERE setting = in_setting;
END //
