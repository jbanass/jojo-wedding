CREATE TABLE `food` (
  `food_id` int(11) NOT NULL,
  `food_name` varchar(100) NOT NULL,
  `food_description` varchar(255) NOT NULL,
  PRIMARY KEY (`food_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `rsvp` (
  `rsvp_id` int(11) NOT NULL,
  `song_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rsvp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `hotel` (
  `hot_id` int(11) NOT NULL,
  `hot_name` varchar(255) NOT NULL COMMENT 'Hotel Name',
  `hot_address_1` varchar(255) NOT NULL COMMENT 'Hotel Address 1',
  `hot_address_2` varchar(255) NOT NULL COMMENT 'Hotel Address 2',
  `hot_address_3` varchar(255) NOT NULL COMMENT 'Hotel Address 3',
  `hot_city` varchar(255) NOT NULL COMMENT 'Hotel City',
  `hot_state` varchar(50) NOT NULL COMMENT 'Hotel State',
  `hot_zip` varchar(12) NOT NULL COMMENT 'Hotel Zip Code',
  `hot_phone` varchar(12) NOT NULL COMMENT 'Hotel Phone Number',
  `hot_group_code` varchar(50) NOT NULL COMMENT 'Hotel Group Code',
  `hot_url` varchar(255) NOT NULL COMMENT 'Hotel URL',
  PRIMARY KEY (`hot_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `registry` (
  `reg_id` int(11) NOT NULL COMMENT 'Unique ID for a registry',
  `reg_url` varchar(255) NOT NULL COMMENT 'URL to registry',
  `reg_icon` varchar(255) DEFAULT NULL COMMENT 'Icon for registry',
  PRIMARY KEY (`reg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `setting` (
  `setting` varchar(10) NOT NULL,
  `value` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`setting`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `person` (
  `per_id` int(11) NOT NULL COMMENT 'primary key for locating a Person',
  `per_first` varchar(50) NOT NULL COMMENT 'The first name of a Person',
  `per_last` varchar(50) NOT NULL COMMENT 'The last name of a Person',
  `per_title` varchar(25) DEFAULT NULL COMMENT 'The title of a person. Think Mr., Mrs., etc.',
  `rsvp_id` int(11) NOT NULL,
  `food_id` int(11) NOT NULL,
  `food_notes` varchar(255) NOT NULL,
  `person_notes` varchar(255) NOT NULL,
  PRIMARY KEY (`per_id`),
  KEY `fk_per_food_idx` (`food_id`),
  KEY `fk_per_rsvp_idx` (`rsvp_id`),
  CONSTRAINT `fk_per_food` FOREIGN KEY (`food_id`) REFERENCES `food` (`food_id`),
  CONSTRAINT `fk_per_rsvp` FOREIGN KEY (`rsvp_id`) REFERENCES `rsvp` (`rsvp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
