// require npm packages
const inquirer = require('inquirer');
const fs = require('fs');
// require files within project
const {generateTeam, generateHTML} = require('./src/utils.js');
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
        //let manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        // send manager to teamMembers array
        answers.role = 'Manager';
        //teamMembers.push(manager);
        teamMembers.push(answers);
        return optionMenu();
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
        switch (answer.menu) {
            case 'Add Engineer': 
                console.log('===== Adding Engineer =====');
                return createEngineer();

            case 'Add Intern':
                console.log('===== Adding Intern ======');
                return createIntern();

            case 'Finished':
                console.log('*** FINISHED! ***');
                return false;
        }
    });
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
        //let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        // send engineer to teamMembers array
        answers.role = 'Engineer';
        //teamMembers.push(engineer);
        teamMembers.push(answers);
        console.log(teamMembers);
        // return to menu
        return optionMenu();
    });
}

function createIntern () {
    return inquirer.prompt([
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
        // let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        // send engineer to teamMembers array
        //teamMembers.push(intern);
        answers.role = 'Intern';
        teamMembers.push(answers);
        console.log(teamMembers);
        // return to menu
        return optionMenu();
    });
}

// function to write HTML file
function writeToFile(data) {
    fs.writeFile('./dist/index.html', data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("HTML successfully created!");
        }
      });
};

//Initialize app
createManager()
    // .then(teamMembers => {
    //     let htmlObj = generateTeam(teamMembers);
    //     return htmlObj;
    // })
    // .then(htmlObj => {
    //     let htmlData = generateHTML(htmlObj);
    //     return htmlData;
    // })
    .then(teamMembers => {
        let htmlData = generateHTML(teamMembers);
        return htmlData;
    })
    .then(htmlData => {
        return writeToFile(htmlData);
    })
    .catch(err => {
    console.log(err);
    });