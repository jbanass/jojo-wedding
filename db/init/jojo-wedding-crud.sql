-- FOOD CRUD
DROP PROCEDURE IF EXISTS jojowedding.p_food_create;

DELIMITER //

CREATE PROCEDURE `p_food_create` 
(
	in_par_id INT,
    in_per_id INT,
    in_choice INT,
    in_notes VARCHAR(255)
)
BEGIN

	IF NOT EXISTS (SELECT *
								FROM jojowedding.party
                                WHERE par_id = in_par_id)
	THEN
		BEGIN
			CALL raise(1001, 'Party chosen does not exist.');
		END;
    END IF;

	IF NOT EXISTS (SELECT *
								FROM jojowedding.person
                                WHERE per_id = in_per_id)
	THEN
		BEGIN
			CALL raise(2001, 'Person chosen does not exist.');
        END;
	END IF;
    
    INSERT INTO `jojowedding`.`food`
	(
		`par_id`,
		`per_id`,
		`choice`,
		`notes`
	)
	VALUES
	(
		in_par_id,
		in_per_id,
		in_choice,
		in_notes
	);

END //

DROP PROCEDURE IF EXISTS jojowedding.p_food_read;

DELIMITER //

CREATE PROCEDURE `p_food_read` 
(
	in_par_id INT,
    in_per_id INT
)
BEGIN

	IF NOT EXISTS (SELECT *
								FROM jojowedding.party
                                WHERE par_id = in_par_id)
	THEN
		BEGIN
			CALL raise(1001, 'Party chosen does not exist.');
		END;
    END IF;

	IF NOT EXISTS (SELECT *
								FROM jojowedding.person
                                WHERE per_id = in_per_id)
	THEN
		BEGIN
			CALL raise(2001, 'Person chosen does not exist.');
        END;
	END IF;
    
    SELECT *
	FROM jojowedding.food
	WHERE par_id = in_par_id
	AND per_id = in_per_id;

END //