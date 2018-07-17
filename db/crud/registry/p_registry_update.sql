DROP PROCEDURE IF EXISTS jojowedding.p_r_update;

DELIMITER //

CREATE PROCEDURE `p_registry_update`
(
	in_reg_id INT,
    in_reg_url VARCHAR(255),
    in_reg_icon VARCHAR(255)
)
BEGIN
	UPDATE jojowedding.registry
    SET reg_url = in_reg_url,
			reg_icon = in_reg_icon
    WHERE reg_id = in_reg_id;
END //