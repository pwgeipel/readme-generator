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
        message: "Provide a screenshot of the project with ![alt text](assets/images/screenshot.png)",
        name: "screenshot",
    },{
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        name: "collaborators",
    },{
        type: "input",
        message: "If you used any tutorials or third-party assets that require attribution, list them here and include links.",
        name: "tutorials"        
    },{
        type: "list",
        message: "Choose a license for the application",
        name: "license",
        choices: ['MIT', 'Apache', 'Unlicense', 'GNU General Public License', 'Mozilla Public License', 'Eclipse Public License', 'Berkeley Source Distribution (BSD)', 'N/A'],
    },{
        type: "input",
        message: "Describe how a user may test this application.",
        name: "test",
    },{
        type: "input",
        message: "Provide your contact e-mail.",
        name: "email",
    },{
        type: "input",
        message: "Add your Github username.",
        name: "github",
    }
        

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
