// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'projectTitle',
                message: 'What is the title of your project? (Required)',
                validate: requiredInput => {
                    if (requiredInput) {
                        return true;
                    } else {
                        console.log('You need to enter a name for this project.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'projectDescription',
                message: 'Tell us about your project. (Required)',
                validate: requiredInput => {
                    if (requiredInput) {
                        return true;
                    } else {
                        console.log('You need to enter a description for this project.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Please detail how and what to install for your project. (Required)',
                validate: requiredInput => {
                    if (requiredInput) {
                        return true;
                    } else {
                        console.log('You need to include installation information.')
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How would someone use your project?'
            },
            {
                type: 'input',
                name: 'contributions',
                message: 'Describe the contributors or contributions for or to your project.'
            },
            {
                type: 'list',
                name: 'licenseInfo',
                message: 'Do you have any licenses you would like to include?',
                choices: ['Mozilla', 'MIT', 'GNU', 'n/a']
            },
            {
                type: 'input',
                name: 'githubAccount',
                message: 'Enter your github account name to link your account to this README. (Required)',
                validate: requiredInput => {
                    if (requiredInput) {
                        return true;
                    } else {
                        console.log("Don't be afraid to give credit where credit is due!");
                        return false;
                    }
                }
            }
        ])
}

questions()
    .then(answers => {
        const newReadMe = generateMarkdown(answers);
        // console.log(responses);
        fs.writeFile('./dist/README.md', newReadMe, err => {
            if (err) throw err;
            console.log('README written, sir. Open README.md to see it.');
        });
        }
    );
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
