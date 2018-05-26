CREATE TABLE `person` (
  `per_id` int(11) NOT NULL COMMENT 'primary key for locating a Person',
  `per_first` varchar(50) NOT NULL COMMENT 'The first name of a Person',
  `per_last` varchar(50) NOT NULL COMMENT 'The last name of a Person',
  `per_title` varchar(25) DEFAULT NULL COMMENT 'The title of a person. Think Mr., Mrs., etc.',
  PRIMARY KEY (`per_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `party` (
  `par_id` int(11) NOT NULL,
  `per_id` int(11) NOT NULL,
  `per_guest_id` int(11) NOT NULL,
  PRIMARY KEY (`par_id`,`per_id`,`per_guest_id`),
  KEY `per_id_idx` (`per_id`),
  KEY `per_id_guest_idx` (`per_guest_id`),
  CONSTRAINT `fk_per_par` FOREIGN KEY (`per_id`) REFERENCES `person` (`per_id`),
  CONSTRAINT `fk_per_par_guest` FOREIGN KEY (`per_guest_id`) REFERENCES `person` (`per_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `rsvp` (
  `per_id` int(11) NOT NULL COMMENT 'Primary point of contact for an RSVP',
  `par_id` int(11) NOT NULL COMMENT 'Unique ID for a Party',
  `going` int(11) NOT NULL COMMENT 'Value for if a person has accepted. -1 is no, 0 is maybe, 1 is yes',
  `created_date` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`per_id`,`par_id`),
  KEY `fk_par_rsvp_idx` (`par_id`),
  CONSTRAINT `fk_par_rsvp` FOREIGN KEY (`par_id`) REFERENCES `party` (`par_id`),
  CONSTRAINT `fk_per_rsvp` FOREIGN KEY (`per_id`) REFERENCES `person` (`per_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `food` (
  `par_id` int(11) NOT NULL,
  `per_id` int(11) NOT NULL,
  `choice` int(11) NOT NULL,
  `notes` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`par_id`,`per_id`),
  KEY `fk_per_food_idx` (`per_id`),
  CONSTRAINT `fk_par_food` FOREIGN KEY (`par_id`) REFERENCES `party` (`par_id`),
  CONSTRAINT `fk_per_food` FOREIGN KEY (`per_id`) REFERENCES `person` (`per_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
