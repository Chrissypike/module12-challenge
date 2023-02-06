DROP DATABASE IF EXISTS workplace_db;
CREATE DATABASE workplace_db;

USE workplace_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roles_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id)
);