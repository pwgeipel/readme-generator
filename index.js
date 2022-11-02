// TODO: Include packages needed for this application
const inquirer = require('inquirer');
console.log(inquirer)
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },{
        type: "input",
        message: "What was your motivation for this project?",
        name: "motivation",
    },{
        type: "input",
        message: "Why did you build this project?",
        name: "whyBuild",
    },{
        type: "input",
        message: "What problem does it solve?",
        name: "problem",
    },{
        type: "input",
        message: "What did you learn?",
        name: "learn",
    },{
        type: "input",
        message: "Describe the steps required to install the project.",
        name: "install",
    },{
        type: "input",
        message: "Provide instructions and examples of use.",
        name: "usage",
    },{
        type: "input",
        message: "Provide a screenshot of the project being used.",
        name: "screenshot",
    },{
        type: "list",
        message: "Choose a license for the application",
        name: "license",
        choices: ['MIT', 'Apache', 'Unlicense', 'GNU General Public License', 'Mozilla Public License', 'Eclipse Public License', 'Berkeley Source Distribution (BSD)', 'N/A'],
    }
        

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
