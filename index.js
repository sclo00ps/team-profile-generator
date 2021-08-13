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
const fs = require('fs');
//const util = require('util');

//create writefile function using promises instead of a callback function
//const writeFileAsync = util.promisify(fs.writeFile);


// Initialize Questions object
const teamMbrs = [];

return inquirer
    .prompt([
        {
            type: 'list',
            name: 'mgr',
            message: 'Select the Manager value to begin entering your team manager information.',
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
            message: 'What is the team manager name?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'mgrid',
            message: 'What is the the team manager id?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'mgremail',
            message: 'What is the the team manager email address?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'mgroffnbr',
            message: 'What is the the team manager office number?',
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
            message: 'Please select the role of the additional team member ?',
            choices: ["Engineer", "Intern"],
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'engname',
            message: 'What is the name of the engineer?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'engid',
            message: 'What is the employee id of the engineer?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'engemail',
            message: 'What is the email address of the engineer?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'enggithub',
            message: 'What is the GitHub username of the engineer?',
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
        {
            type: 'list',
            name: 'addtlmbrs',
            message: 'Please select the role of the additional team member ?',
            choices: ["Engineer", "Intern"],
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }

            }
        },
        {
            type: 'input',
            name: 'intname',
            message: 'What is the name of the intern?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'intid',
            message: 'What is the employee id of the intern?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'intemail',
            message: 'What is the email address of the intern?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'intgithub',
            message: 'What is the GitHub username of the intern?',
            validate: (value) => {
                if (value) {
                    return true
                } else { return 'a value must be entered to continue' }
            }
        },
        {
            type: 'input',
            name: 'intschool',
            message: 'What is the school name of the intern?',
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
    ]);



//start displays all actions user can select
// const start = () => {
//     return inquirer.prompt({
//       name: 'action',
//       type: 'list',
//       message: 'What would you like to do?',
//       choices: [
//         'Add manager',
//         'Add engineer',
//         'Add intern',
//         'Exit',
//       ],
//     })git
//     .then((answers) => {
//       switch (answers.action) {
//         case 'Add manager':
//           addManager();
//           break;

//           case 'Add engineer':
//             addEngineer();
//             break;

//         case 'Add intern':
//           addIntern();
//           break;

//         case 'Exit':
//          Exit();
//           break;
       
//         default:
//           console.log(`Invalid action: ${answers.action}`);
//           break;
//       }
//     });
//     };

// //add new manager
// const addManager = () => {
//     // prompt for department
// return inquirer
//     .prompt({
//             type: 'input',
//             name: 'mgrName',
//             message: 'What is the team manager name?',
//             validate: (value) => {
//                 if (value) {
//                     return true
//                 } else { return 'a value must be entered to continue' }
//             }
//         },
//         {
//             type: 'input',
//             name: 'mgrId',
//             message: 'What is the the team manager id?',
//             validate: (value) => {
//                 if (value) {
//                     return true
//                 } else { return 'a value must be entered to continue' }
//             }
//         },
//         {
//             type: 'input',
//             name: 'mgrEmail',
//             message: 'What is the the team manager email address?',
//             validate: (value) => {
//                 if (value) {
//                     return true
//                 } else { return 'a value must be entered to continue' }
//             }
//         },
//         {
//             type: 'input',
//             name: 'mgrOffnbr',
//             message: 'What is the the team manager office number?',
//             validate: (value) => {
//                 if (value) {
//                     return true
//                 } else { return 'a value must be entered to continue' }
//             }
//         })
      
//         .then((answer) => {
//             // when finished prompting, insert a new role into the db 
                  
//               (err) => {
//                 if (err) throw err;
//                 console.log('The new manager has been added successfully!');
//                 // re-prompt the user for new action
//                 start();
//               }
//         });
          
//       };
      
//     //add new engineer 
//    // const addEngineer = () => {
//     // prompt for department
//     return inquirer
//             .prompt({
//             type: 'input',
//             name: 'engname',
//             message: 'What is the name of the engineer?',
//             validate: (value) => {
//                 if (value) {
//                     return true
//                 } else { return 'a value must be entered to continue' }
//             }
//         },
//         {
//             type: 'input',
//             name: 'engid',
//             message: 'What is the employee id of the engineer?',
//             validate: (value) => {
//                 if (value) {
//                     return true
//                 } else { return 'a value must be entered to continue' }
//             }
//         },
//         {
//             type: 'input',
//             name: 'engemail',
//             message: 'What is the email address of the engineer?',
//             validate: (value) => {
//                 if (value) {
//                     return true
//                 } else { return 'a value must be entered to continue' }
//             }
//         },
//         {
//             type: 'input',
//             name: 'enggithub',
//             message: 'What is the GitHub username of the engineer?',
//             validate: (value) => {
//                 if (value) {
//                     return true
//                 } else { return 'a value must be entered to continue' }
//             }
//         })
        
//         .then((answers) => {
//             // when finished prompting, insert a new role into the db 
                  
//               (err) => {
//                 if (err) throw err;
//                 console.log('The new engineer has been added successfully!');
//                 // re-prompt the user for new action
//                 start();
//               }
//         });
          
//       };

//     //add new intern
//     const addIntern = () => {
//     // prompt for department
//     return inquirer
//     .prompt({
//             type: 'input',
//             name: 'intname',
//             message: 'What is the name of the intern?',
//             validate: (value) => {
//                 if (value) {
//                     return true
//                 } else { return 'a value must be entered to continue' }
//             }
//         },
//         {
//             type: 'input',
//             name: 'intid',
//             message: 'What is the employee id of the intern?',
//             validate: (value) => {
//                 if (value) {
//                     return true
//                 } else { return 'a value must be entered to continue' }
//             }
//         },
//         {
//             type: 'input',
//             name: 'intemail',
//             message: 'What is the email address of the intern?',
//             validate: (value) => {
//                 if (value) {
//                     return true
//                 } else { return 'a value must be entered to continue' }
//             }
//         },
//         {
//             type: 'input',
//             name: 'intgithub',
//             message: 'What is the GitHub username of the intern?',
//             validate: (value) => {
//                 if (value) {
//                     return true
//                 } else { return 'a value must be entered to continue' }
//             }
//         },
//         {
//             type: 'input',
//             name: 'intschool',
//             message: 'What is the school name of the intern?',
//             validate: (value) => {
//                 if (value) {
//                     return true
//                 } else { return 'a value must be entered to continue' }
//             }
//         })
        
               
//     .then((answers) => {
//         // when finished prompting, insert a new role into the db 
              
//           (err) => {
//             if (err) throw err;
//             console.log('The new intern has been added successfully!');
//             // re-prompt the user for new action
//             start();
          
//           }
//     });
      
//   };

//   const generateHTML = (answers) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>My Team</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1> My Team </h1>
//     <h1 class="display-4"> ${answers.mgrname}</h1>
//       <ul class="list-group">
//       <li class="list-group-item">ID: ${answers.mgrId}</li>
//       <li class="list-group-item">Email: ${answers.mgrEmail}</li>
//       <li class="list-group-item">Office number: ${answers.mgroffnbr}</li>
//       <li class="list-group-item">GitHub username: ${answers.mgrgithub}</li>
//       <li class="list-group-item">School: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

// const init = () => {
//     start()
//     .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };
  
// init();
    
  
//     .then((answers) => {
//         const htmlPageContent = generateHTML(answers);
//         fs.writeFile('index.html', htmlPageContent, (err) =>
//             err ? console.log(err) : console.log('Successfully created index.html!')

//         );
//     })
//     
