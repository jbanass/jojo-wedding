DROP PROCEDURE IF EXISTS jojowedding.p_registry_read;

DELIMITER //

CREATE PROCEDURE `p_registry_read`
(
	in_reg_id INT
)
BEGIN
	SELECT *
    FROM `jojoweddig`.`registry`
    WHERE reg_id = in_reg_id
    OR in_reg_id IS NULL;
END //