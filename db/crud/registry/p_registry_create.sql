DROP PROCEDURE IF EXISTS jojowedding.p_registry_create;

DELIMITER //

CREATE PROCEDURE `p_registry_create`
(
	in_reg_id INT,
    in_reg_url VARCHAR(255),
    in_reg_icon VARCHAR(255)
)
BEGIN
	INSERT INTO jojowedding.registry
    (
		reg_id,
        reg_url,
        reg_icon
    )
    VALUES
    (
		in_reg_id,
        in_reg_url,
        in_reg_icon
    );
END //