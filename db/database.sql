CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE IF NOT EXISTS `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `salary` int(5) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- delete table employee
-- DROP TABLE IF EXISTS `employee`;

insert into employee (name, salary) values 
('John', 1000), ('Peter', 2000), ('Mary', 3000), ('fiona', 4000), ('james', 5000);

-- delete id 7
-- delete from employee where id = 7;