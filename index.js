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
            message: 'What is the manager\'s name?',
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
            message: 'What is the manager\'s ID number?',
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
            message: 'What is the manager\'s email address?',
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
            message: 'What is the manager\'s office number?',
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
        // send answers to teamMembers array
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
            console.log('adding engineer');
            createEngineer();
        }
        if (answer.menu === 'Add Intern') {
            console.log('adding intern');
            createIntern();
        }
        if (answer.menu === 'Finished') {
            console.log('finished');
            generateHTML();
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
            message: 'What is the manager\'s GitHub username?',
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
        // send answers to teamMembers array
        //teamMembers.push(answers);
    });
}

function createIntern () {
    inquirer.prompt([
        // questions here
    ])
    .then(answers => {
        teamMembers.push(answers);
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