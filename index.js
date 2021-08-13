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
const util = require('util');

//const writeFileAsync = util.promisify(fs.writeFile);

// Initialize Questions object
const teamMbrs = [];

//start displays all actions user can select
const start = () => {
    return inquirer.prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'Add manager',
        'Add engineer',
        'Add intern',
        'Exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'Add manager':
          addManager();
          break;

          case 'Add engineer':
            addEngineer();
            break;

        case 'Add intern':
          addIntern();
          break;

        case 'Exit':
         addEmployee();
          break;
       
        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
    };

//add new manager
const addManager = () => {
    // prompt for department
return inquirer
    .prompt({
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
        })
      
        .then((answer) => {
            // when finished prompting, insert a new role into the db 
                  
              (err) => {
                if (err) throw err;
                console.log('The new manager has been added successfully!');
                // re-prompt the user for new action
                start();
              }
        });
          
      };
      
    //add new engineer 
    const addEngineer = () => {
    // prompt for department
    return inquirer
            .prompt({
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
        })
        
        .then((answer) => {
            // when finished prompting, insert a new role into the db 
                  
              (err) => {
                if (err) throw err;
                console.log('The new engineer has been added successfully!');
                // re-prompt the user for new action
                start();
              }
        });
          
      };

    //add new intern
    const addIntern = () => {
    // prompt for department
    return inquirer
    .prompt({
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
        })
        
                
    .then((answer) => {
        // when finished prompting, insert a new role into the db 
              
          (err) => {
            if (err) throw err;
            console.log('The new intern has been added successfully!');
            // re-prompt the user for new action
            start();
          }else {
              return
          }
    });
      
  };



       
    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);
        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')

        );
    })


