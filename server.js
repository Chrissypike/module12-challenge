const inquirer = require('inquirer');
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kimber17!',
  database: 'workplace_db',
  port: 3306,
});


// Initiate MySQL Connection
connection.connect(function(err) {
    if (err) {
        console.error("connection error: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


//Run the App
function Run() {
    inquirer.prompt(
        {
            name: "options",
            type: "list",
            message: "Which would you like to view or do?",
            choices: [
                "View All Employees", 
                "View All Departments", 
                "View All Roles", 
                "Add Employee", 
                "Add Department", 
                "Add Role",
                "Update Employee Role",
                "Exit"
            ]
        })
        .then(function(answer) {
            switch (answer.options) {
                case "View All Employees":
                    ViewEmployees();
                    break;

                case "View All Departments":
                    viewDepartments();
                    break;

                case "View All Roles":
                    viewRoles();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Add Department":
                    addDept();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Update Employee Role":
                    updateRole();
                    break;

                case "exit":
                    connection.end();
                    break;
            }
        });
}

//Viewing all employees and their info
function ViewEmployees() {
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
    });
    Run();
}

//Viewing all departments and it's info 
function viewDepartments() {
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
    });
    Run();
}

//Viewing all roles and it's info
function viewRoles() {
    var query = "SELECT * FROM roles";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
    });
    Run();
}

//Calling the addEmployee function to add an employee
function addEmployee() {
    inquirer.prompt(
        [
            {
                name: "first_name",
                type: "input",
                message: "Enter the employee's first name"
            }, 
            {
                name: "last_name",
                type: "input",
                message: "Enter the employee's last name"
            }, 
            {
                name: "roles_id",
                type: "input",
                message: "Enter the employee's role id"
            }, 
            {
                name: "manager_id",
                type: "input",
                message: "Enter your manager's id",
            }, 
        ]
    )
        .then(function(answer) {
            let query = "INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?)"
            connection.query(query, [answer.first_name, answer.last_name, parseInt(answer.roles_id), parseInt(answer.manager_id)], function(err, res) {
                if (err) throw err;
                console.log(res);
            })
            Run();
        })
}

//add new Department

function addDept() {
    inquirer.prompt(
        {
            name: "department_name",
            type: "input",
            message: "Enter the name of the department you want to add"
        }, 
    )
        .then(function(answer) {
            let query = "INSERT INTO department (department_name) VALUES (?)";
            connection.query(query, [answer.department_name], function(err, res) {
                if (err) throw err;
                console.table(res);
            })
            Run();
        })

}

//add Role and info 

function addRole() {
    inquirer.prompt(
        [
            {
                name: "title",
                type: "input",
                message: "Enter the name of the new role title"
            }, 
            {
                name: "salary",
                type: "input",
                message: "Enter the yearly salary of this role"
            }, 
            {
                name: "department_name",
                type: "input",
             message: "Enter the department this new role is under"
            }
        ])
        .then(function(answer) {
            let query = "INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)";
            connection.query(query, [answer.title, answer.salary, answer.department_name], function(err, res) {
                if (err) throw err;
                console.table(res);
            })
            Run();
        })

}


// Calling the update role function to update an employee role

function updateRole() {
    inquirer.prompt([
        {
            name: "employeeID",
            type: "input",
            message: "Enter the employee's ID"
        }, 
        {
            name: "roleID",
            type: "input",
            message: "Enter the employee's new role ID"
        }
    ])
        .then(function(answer) {
            let query = "UPDATE employee SET roles_id = ? WHERE id =?";
            connection.query(query, [parseInt(answer.employeeID), parseInt(answer.roleID)], function(err, res) {
                if (err) throw err;
                console.table(res);
            })
            Run();
        })

}

Run();