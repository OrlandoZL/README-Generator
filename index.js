// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown.js')

//It's an array of questions for the user to answer
questions = [
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
        message: "Describe the steps that are needed to install your project if it applies.",
        name: "installation",
    },
    {
        type: "input",
        message: "Describe how to use your project",
        name: "usage",
    },
    {
        type: "input",
        message: "Describe the test that you wrote for your project and how to use them",
        name: "tests",
    },
    {
        type: "input",
        message: "Describe how others are able to contribute to your project",
        name: "contributing",
    },
    {
        type: "list",
        message: "which license would you like to use?",
        name: "license",
        choices: ["Apache", "Mozilla", "MIT"],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
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
