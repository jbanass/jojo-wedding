DROP PROCEDURE IF EXISTS jojowedding.p_setting_create;

DELIMITER //

CREATE PROCEDURE `p_setting_create`
(
	in_setting VARCHAR(10),
    in_value VARCHAR(255),
    in_description VARCHAR(255)
)
BEGIN
	INSERT INTO jojowedding.setting
    (
		setting,
        value,
        description
    )
    VALUES
    (
		in_setting,
        in_value,
        in_description
    );
END //