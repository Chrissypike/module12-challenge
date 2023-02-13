INSERT INTO department (id, department_name, roles_id)
VALUES (1,"Backstock", 1),
       (2,"Sales Floor", 2),
       (3,"Fitting rooms", 3),
       (4,"Registers", 4);


INSERT INTO roles (title, salary, department_id)
VALUES ("Stock Associate", 19000, 1),
       ("Sales Associate", 19000, 2),
       ("Sales Lead", 20000, 3),
       ("Stock Lead", 20000, 4),
       ("Manager", 25000, 5);


INSERT INTO employee (id, first_name, last_name, roles_id,)
VALUES (1,"Joel", "Miller", "2", 2 ),
       (2, "Lily", "Potter", "1", 1 ),
       (3, "Rob", "Johnson", "3", 3),
       (4, "Cyber", "Jo", "5", 5 ),
       (5, "Sabrina", "Carrier", "4", 4 ),
       (6, "Wayne", "Wheeler", "1", 1),
       (7, "Percy", "Holmes", "2", 2);
