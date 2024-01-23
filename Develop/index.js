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
      message: "Why did you build this project? What problem does it solve?",
      name: "whyBuild",
    },
    {
      type: "input",
      message: "What did you learn?",
      name: "whatLearned",
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installationSteps",
    },
    {
      type: "input",
      message: "Provide instructions and examples for use:",
      name: "instructions",
    },
    {
      type: "list",
      message: "Select a license:",
      choices: [
        {value: "Apache License"},
        {value: "BSD License"},
        {value: "Creative Commons License"},
        {value: "GNU General Public License"},
        {value: "MIT License"},
      ],
      name: "license",
    },
    {
      type: "input",
      message: "List your collaborators, if any:",
      name: "contributing",
    },
    {
      type: "input",
      message: "What are the testing steps for this project?",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "gitHub",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])
  .then((response) =>
    // TODO: Create a function to write README file
    fs.writeFile(
      "generatedReadme.md",
      `
# ${response.projectTitle}

![License](${generateBadgeURL(response.license)})

## Description

${response.whyBuild}
${response.whatLearned}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${response.installationSteps}

## Usage

${response.instructions}

## License

This project is licensed under the ${response.license}.

## Contributing

${response.contributing}

## Tests

${response.tests}

## Questions

GitHub profile: [www.github.com/${response.gitHub}/](https://www.github.com/${response.gitHub}/)

Email address: ${response.email}

Feel free to send any additional questions to the e-mail address shown above.

`,
      (err) => (err ? console.error(err) : console.log("Success!"))
    )
  );

function generateBadgeURL (license) {
  let formattedLicense = license.replaceAll(" ", "%20");
  let badgeURL = `https://img.shields.io/badge/${formattedLicense}-8A2BE2`;
  return badgeURL;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
