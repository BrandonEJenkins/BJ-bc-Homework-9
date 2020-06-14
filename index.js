// Commands to use modules
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

// Array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        default: 'title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
        default: 'description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: 'installation'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        default: 'usage'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'List any contribution guidelines for your project.',
        default: 'contribution'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'List any testing instructions for your project.',
        default: 'tests'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select an open source license for your project.',
        choices: [
            {
                name: 'MIT License',
                checked: true
            },
            {
                name: 'GNU General Public License (GPL) 3.0'
            },
            {
                name: 'Apache License 2.0'
            }
        ],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        default: 'username'
    },
    {
        type: 'email',
        name: 'email',
        message: 'What is your email address?',
        default: 'email'
    }
];


function init() {
    inquirer
        .prompt(questions).then((answer) => {

            // Appends user project title response to readme file
            fs.appendFileSync("README.md", ("# " + answer.title ) + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            })
            
            // Appends project description to readme file
            fs.appendFileSync("README.md", ("## Description" + '\n' + answer.description ) + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            })
            
            // Appends installation instructions to readme file
            fs.appendFileSync("README.md", ("## Installation" + '\n' + answer.installation ) + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            })
            
            // Appends usage instructions to readme file
            fs.appendFileSync("README.md", ("## Usage Instructions" + '\n' + answer.usage ) + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            })
            
            // Appends contribution guidelines to readme file
            fs.appendFileSync("README.md", ("## How to Contribute to the Application " + '\n' + answer.contribution ) + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            })
            
            // Appends testing instructions to readme file
            fs.appendFileSync("README.md", ("## Testing Examples for the Application " + '\n' + answer.tests ) + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            })
            
            // Appends license selection to readme file
            fs.appendFileSync("README.md", ("## License" + '\n' + answer.license ) + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            })
            
            // Appends GitHub username and email to readme file
            fs.appendFileSync("README.md", ("## Questions" + '\n' + "Project developer's GitHub: " + answer.username + '\n' + "Contact the developer at: " + answer.email ) + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            })
            
            // // Appends GitHub email to readme file
            // fs.appendFileSync("README.md", ("# " + answer.email ) + '\n', function(err) {

            //     if (err) {
            //         console.log(err)
            //     }
            //     else {
            //         console.log("Success")
            //     }

            // })
            

        })
}


// Calls function to create readme file
init();



/**
 * 
 * project title
 * --"What is the title of your project"
 * 
 * description
 * --"How would you describe your project"
 * 
 * table of contents
 * -- links to each section
 * 
 * installation
 * --"What are the steps required to install your project?"
 *  
 * usage
 * --"Provide instructions and examples for use."
 * 
 * license
 * --"What are the licensing restrictions for your project?"
 * 
 * contributing
 * --"List any collaborators that helped you build your project."
 * 
 * tests
 * ---"Provide examples on how to run any tests for your "
 * 
 * questions
 * --gh username
 * --"Please contact me at (gh email) for more questions." 
 * 
 * 
 */