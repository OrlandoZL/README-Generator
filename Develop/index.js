// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your github username?",
        name: "username",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            }
            else {
                console.log("Enter your github username!")
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Write a description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Describe the steps that are need to install your project if it applies.",
        name: "installation",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./utils/generated-README.md", data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Congrats! Your README has now been generated!")
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init();
