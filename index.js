const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');

// function to create manager, include prompts here

// empty array, pass to generateHTML
const teamMembers = [];

function createManager () {
    inquirer.prompt([
        // questions here
    ])
    .then(answers => {
        // send answers to teamMembers array
        teamMembers.push(answers);
    });
}

function optionMenu () {
    inquirer.prompt([
        // menu
    ])
    .then(answer => {
        if (answer === 'engineer') {
            createEngineer();
        }
        if (answer === 'intern') {
            createIntern();
        }
        if (answer === 'finish') {
            generateHTML();
        }
    })
}

function createEngineer () {
    
}

function createIntern () {

}

// function to write HTML file
function writeToFile(data) {

};

// function to initialize app
function init() {
    createManager();
}

//Function call to initialize app
init()
  .then(questions => {
    const htmlData = generateHTML(questions);
    return htmlData;
  })
  .then(htmlData => {
    return writeToFile(htmlData);
  })
  .catch(err => {
    console.log(err);
  });