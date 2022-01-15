const inquirer = require('inquirer');
const fs = require('fs');
// require files within project
const generateHTML = require('./src/generateHTML.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// empty array, pass to generateHTML
const teamMembers = [];

// function to create manager, include prompts here
function createManager () {
    return inquirer.prompt([
       { 
            type: 'input',
            name: 'name',
            message: 'What is the Manager\'s name?',
            validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name');
                return false;
            }
            }
        },
        { 
            type: 'input',
            name: 'id',
            message: 'What is the Manager\'s ID number?',
            validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter an ID');
                return false;
            }
            }
        },
        { 
            type: 'input',
            name: 'email',
            message: 'What is the Manager\'s email address?',
            validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email');
                return false;
            }
            }
        },
        { 
            type: 'input',
            name: 'office',
            message: 'What is the Manager\'s office number?',
            validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter an office number');
                return false;
            }
            }
        }
    ])
    .then(answers => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        // send manager to teamMembers array
        teamMembers.push(manager);
    });
}

function optionMenu () {
    return inquirer.prompt([
        // menu with 3 options: add engineer, add intern, finish
        {
            type: 'list',
            name: 'menu',
            message: 'What would you add next?',
            choices: ['Add Engineer', 'Add Intern', 'Finished'] 
        }
    ])
    .then(answer => {
        if (answer.menu === 'Add Engineer') {
            console.log('===== Adding Engineer =====');
            createEngineer();
        }
        if (answer.menu === 'Add Intern') {
            console.log('===== Adding Intern ======');
            createIntern();
        }
        if (answer.menu === 'Finished') {
            console.log('*** FINISHED! ***');
            console.log(teamMembers);
            //generateHTML(teamMembers);
        }
    })
}

function createEngineer () {
    return inquirer.prompt([
        { 
            type: 'input',
            name: 'name',
            message: 'What is the Engineer\'s name?',
            validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name');
                return false;
            }
            }
        },
        { 
            type: 'input',
            name: 'id',
            message: 'What is the Engineer\'s ID number?',
            validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter an ID');
                return false;
            }
            }
        },
        { 
            type: 'input',
            name: 'email',
            message: 'What is the Engineer\'s email address?',
            validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email');
                return false;
            }
            }
        },
        { 
            type: 'input',
            name: 'github',
            message: 'What is the Engineer\'s GitHub username?',
            validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a GitHub username');
                return false;
            }
            }
        }
    ])
    .then(answers => {
        let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        // send engineer to teamMembers array
        teamMembers.push(engineer);
        optionMenu();
    });
}

function createIntern () {
    inquirer.prompt([
        { 
            type: 'input',
            name: 'name',
            message: 'What is the Intern\'s name?',
            validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name');
                return false;
            }
            }
        },
        { 
            type: 'input',
            name: 'id',
            message: 'What is the Intern\'s ID number?',
            validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter an ID');
                return false;
            }
            }
        },
        { 
            type: 'input',
            name: 'email',
            message: 'What is the Intern\'s email address?',
            validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email');
                return false;
            }
            }
        },
        { 
            type: 'input',
            name: 'school',
            message: 'What is the name Intern\'s school?',
            validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter a school');
                return false;
            }
            }
        }
    ])
    .then(answers => {
        let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        // send engineer to teamMembers array
        teamMembers.push(intern);
        optionMenu();
    });
}

// function to write HTML file
function writeToFile(data) {

};

// function to initialize app
// function init() {
//     createManager();
// }

//Function call to initialize app
createManager()
   .then(optionMenu);
//   .catch(err => {
//     console.log(err);
//   });