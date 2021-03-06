const fs = require('fs'); 
const inquirer = require('inquirer');
 
const exampleHTML = require('./src/exampleHtml.js');
const Employee = require('./lib/employee.js'); 
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

let employee = [];

// Questions for inquirer prompt 

let prompt = [ 
    {
        type: "input",
        name: "name",
        message: "Enter name of employee?",
    },
    {
        type: 'number',
        name: 'id',
        message: ({ name }) => `Please enter the id of ${(name)}`,
    },
    {
        type: 'input',
        name: 'email',
        message: ({ name }) => `Please enter email address of ${(name)}`
    },
    {
        type: "list",
        name: "role",
        message: ({ name }) => `Please enter the role for ${(name)}`,
        choices: [
            // "Employee", 
            "Manager", 
            "Engineer", 
            "Intern"
        ],
    },
    { 
        type:'input',
        name:'officeNo',
        message: ({ name }) => `Please enter the office number of ${(name)}`,
        when: ({ role }) => { 
           if (role === 'Manager') {
               return true;
           } else { 
               return false;
           };  
        }
    }, 
    {
        type: 'input',
        name: 'github',
        message: ({ name }) => `Please enter GitHub username for ${(name)}:`,
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else { 
                return false;
            };  ;
        }
    },
    {
        type: 'input',
        name: 'school',
        message: ({ name }) => `What is the school of ${(name)}?`,
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            } else { 
                return false;
            };  
        }
    },
    
]

function newEmployee(prompt) { 
    inquirer.prompt(prompt)
     .then((results) => { 
         employeeType(results);
     })
     .then(() => { 
         inquirer.prompt([ 
             {
                 type:'list',
                 name: 'addEmployee', 
                 message: "would you like to add further employees?",
                 choices: ['No', 'Yes'],
             }
         ])
         .then((results) => {
             if (results.addEmployee === "Yes") { 
                 newEmployee(prompt);
             } else { 
                 let finalPage = exampleHTML(employee);
                 fs.writeFile("index.html", finalPage, (err) => { 
                     if (err) return (err); 
                 });

             }

         }
         )}
         
     ).catch((err) => console.log(err));
    }

function employeeType(results) { 
console.log(results);
if (results.role === "Employee") {
    employee.push(new Employee(results.name, results.id, results.email));
  } else if (results.role === "Manager") {
    employee.push(new Manager(results.id, results.name, results.email, results.officeNo));
  } else if (results.role === "Engineer") {
    employee.push(new Engineer(results.name, results.email, results.id, results.github));
  } else if (results.role === "Intern") {
    employee.push(new Intern(results.id, results.name, results.email, results.school));
  }
}


newEmployee(prompt); 