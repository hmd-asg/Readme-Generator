// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown')

// array of questions for user input
const questions = [];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (error) => {
        error ? console.log(error) : console.log('README file created succesfully');
    });
}

// Function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "username",
                message:
                    "What is your Github username ?",
            },
            {
                type: "input",
                name: "email",
                message:
                    "What is your email address ?",
            },
            {
                type: "input",
                name: "title",
                message:
                    "What is your project title ?",
            },
            {
                type: "input",
                name: "description",
                message:
                    "Give a short description to your project ",
            },
            {
                type: "list",
                name: "license",
                message:
                    "What is the license of your project ?",
                choices: ['MIT', 'Apache 2.0', 'EPL 1.0', 'ISC', 'BSD 3-Clause']
            },
            {
                type: "input",
                name: "installation",
                message:
                    "How to install dependencies on your project ?",
            },
            {
                type: "input",
                name: "use",
                message:
                    "What does user need to run the app ?",
            },
            {
                type: "input",
                name: "test",
                message:
                    "How to run tests on your project ?",
            },
            {
                type: "input",
                name: "contributing",
                message:
                    "How Can a user contribute to your repo ?",
            }

        ])
        .then((response) => {
            writeToFile('README.md', generateReadme(response));
        }
        )
}

// Function call to initialize app
init();
