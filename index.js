//classes required to run application
const employee = require('./lib/Employee.js');
console.log("employee");
const engineer = require('./lib/Engineer.js');
console.log("Engineer");
const manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
//inquirer npm pkg for user prompts
const inquirer = require('inquirer');
//testing npm pkg
const jest = require("jest");
//file system required for writing to file
const fs = require("fs");


// Initialize Questions object
const teamMbrs = [];


// create file to generate html
//const generateHTML = (answers) =>
//    `<!DOCTYPE html>
//<html lang="en">
//<head>
 // <meta charset="UTF-8">
//  <meta http-equiv="X-UA-Compatible" content="ie=edge">
//  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
 // <title>Document</title>
//</head>
//<body>
 // <div class="jumbotron jumbotron-fluid">
 // <div class="container">
 //   <h1 class="display-4">Hi! My name is ${answers.name}</h1>
 //   <p class="lead">I am from ${answers.location}.</p>
 //   <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
 //   <ul class="list-group">
 //     <li class="list-group-item">My GitHub username is ${answers.github}</li>
 //     <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
 //   </ul>
 // </div>
//</div>
//</body>
//</html>`;

return inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the team member role?',
            choices: ["Engineer", "Intern", "Manager"],
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the team member name?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team member id?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team member email address?',
            validate: (value) => {
                if (value) {return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: (value) => {if (value) {return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            // rethink add if stmt to exit chg validate stmt
            type: 'list',
            name: 'newmbr',
            message: 'Would you like to add a new team member, if so select a role?',
            choices: ["Manager", "Intern"],
            validate: (value) => {if (value) {return true
         //     } else { return 'a value must be entered to continue' }
              } else {exit}
            }
        },

      //},

    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });
