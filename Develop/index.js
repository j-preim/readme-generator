// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of the project?",
      name: "projectTitle",
    },
    {
      type: "input",
      message: "What was your motivation?",
      name: "motivation",
    },
    {
      type: "input",
      message:
        'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")',
      name: "whyBuild",
    },
    {
      type: "input",
      message: "What problem does it solve?",
      name: "problemSolved",
    },
    {
      type: "input",
      message: "What did you learn?",
      name: "whatLearned",
    },
    {
      type: "input",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      name: "installationSteps",
    },
    {
      type: "input",
      message:
        "Provide instructions and examples for use. Include screenshots as needed.",
      name: "instructions",
    },
    {
      type: "input",
      message:
        "List your collaborators, if any, with links to their GitHub profiles.",
      name: "credits",
    },
    {
      type: "input",
      message:
        "What is your GitHub username?",
      name: "gitHub",
    },
    {
      type: "input",
      message:
        "What is your email address?",
      name: "email",
    },
  ])
  .then((response) =>
    // TODO: Create a function to write README file
    fs.writeFile(
      "generatedReadme.md",
      `
# ${response.projectTitle}

## Description

${response.motivation}

## Table of Contents



## Installation

${response.installationSteps}

## Usage

${response.instructions}

## License

## Contributing

${response.credits}

## Tests

## Questions

GitHub: ${response.gitHub}

Email address: ${response.email}

Feel free to send any additional questions to the e-mail address shown above.

`,
      (err) => (err ? console.error(err) : console.log("Success!"))
    )
  );

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
