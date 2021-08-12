//classes required to run application
const Employee = require("./lib/Employee");
//console.log(employee)
const Engineer = require("./lib/Engineer");
//console.log(Engineer)
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
//inquirer npm pkg for user prompts
const inquirer = require("inquirer");
//testing npm pkg
//const jest = require('jest');
//file system required for writing to file
const fs = require("fs");
//const util = require('util');

//const writeFileAsync = util.promisify(fs.writeFile);

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

//start displays all actions user can select
// const start = () => {
//     return inquirer.prompt({
//       name: 'action',
//       type: 'list',
//       message: 'What would you like to do?',
//       choices: [
//         'Add a new department',
//         'Add a new employee role',
//         'Add a new employee',
//         'View all departments',
//         'View all roles',
//         'View all employees',
//         'Update employee roles',
//       ],
//     })
//     .then((answer) => {
//       switch (answer.action) {
//         case 'Add a new department':
//           addDepartment();
//           break;
    
//         case 'Add a new employee role':
//           addRole();
//           break;
    
//         case 'Add a new employee':
//          addEmployee();
//           break;
    
//           case 'View all departments':
//           viewDepartment();
//           break;
    
//         case 'View all roles':
//           viewRole();
//           break;
    
//         case 'View all employees':
//           viewEmployee();
//           break;
    
//         case 'Update employee roles':
//           updateRole();
//           break;
       
//         default:
//           console.log(`Invalid action: ${answer.action}`);
//           break;
//       }
//     });
//     };

return inquirer
    .prompt([
        {
            type: 'list',
            name: 'mgr',
            message: 'Please select the Manager value to begin entering your team members information?',
            choices: ["Manager"],
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'mgrname',
            message: 'What is the name of your Manager?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'mgrid',
            message: 'What is the employee id of your Manager?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'mgremail',
            message: 'What is the email address of your Manager?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'mgroffnbr',
            message: 'What is the office number of your Manager?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'list',
            name: 'contchoices',
            message: 'What do you want to do?',
            choices: [
                "Add a new team member",
                "Exit"
            ],
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
      //  }])

          /*  .then((answers) => {
            const htmlPageContent = generateHTML(answers);
            if (answers.contchoices === "Exit") {
            fs.writeFile('index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')) 
            } else {
            return inquirer
                .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the team member role?',
            choices: ["Engineer", "Intern"],
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        */

        {
            type: 'list',
            name: 'addtlmbrs',
            message: 'Please select the role of tthe additional team member ?',
            choices: ["Engineer", "Intern"],
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the addtional team member?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id of the additional team member?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
                }
            },
            {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the additional team member?',
            validate: (value) => {
                if (value) {
                     return true
                } else { return 'a value must be entered to continue' }
                }
            },
            {
            type: 'input',
            name: 'github',
            message: 'What is the GitHub username of the additional team member?',
            validate: (value) => {
                if (value) {
                     return true
                } else { return 'a value must be entered to continue' }
                }
            },
            {
                type: 'list',
                name: 'contchoices',
                message: 'What do you want to do?',
                choices: [
                    "Add a new team member",
                    "Exit"
                ],
                validate: (value) => {
                    if (value) {
                        return true
                    } else { return 'a value must be entered to continue' }
                }
            },

            //  }])

          /*  .then((answers) => {
            const htmlPageContent = generateHTML(answers);
            if (answers.contchoices === "Exit") {
            fs.writeFile('index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')) 
            } else {
            return inquirer
                .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the team member role?',
            choices: ["Engineer", "Intern"],
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        */
           
       //  ])
        
            {
            type: 'list',
            name: 'addtlmbrs',
            message: 'Please select the role of tthe additional team member ?',
            choices: ["Engineer", "Intern"],
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
                }
            },
            {
            type: 'input',
            name: 'name',
            message: 'What is the name of the addtional team member?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
                }
            },
            {
            type: 'input',
            name: 'id',
            message: 'What is the employee id of the additional team member?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
                }
            },
            {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the additional team member?',
            validate: (value) => {
                if (value) {
                     return true
                } else { return 'a value must be entered to continue' }
                }
            },
            {
            type: 'input',
            name: 'school',
            message: 'What is the name of the school of the additional team member?',
            validate: (value) => {
                if (value) {
                     return true
                } else { return 'a value must be entered to continue' }
                }
            },
            {
            // rethink add if stmt to exit chg validate stmt
            type: 'list',
            name: 'newmbr',
            message: 'Would you like to add a new team member, if so select a role?',
            choices: ["Manager", "Intern"],
            validate: (value) => {
                if (value) {
                     return true
                } else { return 'a value must be entered to continue' }
                }
            },
         ])
            .then((answers) => {
            const htmlPageContent = generateHTML(answers);
            fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
            
                );
            })   
        
            
    