DROP PROCEDURE IF EXISTS jojowedding.p_registry_delete;

DELIMITER //
CREATE PROCEDURE `p_registry_delete`
(
	in_reg_id int
)
BEGIN
	DELETE FROM jojowedding.registry
    WHERE reg_id = in_reg_id;
END //
