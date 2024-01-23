// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeURL = "";
  if (license) {
    let formattedLicense = license.replaceAll(" ", "%20");
    badgeURL = `https://img.shields.io/badge/${formattedLicense}-8A2BE2`;
  }
  return badgeURL;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license) {
    if (license === "Apache License") {
      licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
    }
    else if (license === "BSD License") {
      licenseLink = "https://choosealicense.com/licenses/bsd-3-clause/";
    }
    else if (license === "Creative Commons License") {
      licenseLink = "https://choosealicense.com/licenses/cc0-1.0/";
    }
    else if (license === "GNU General Public License") {
      licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
    }
    else if (license === "MIT License") {
      licenseLink = "https://choosealicense.com/licenses/mit/";
    }
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license) {
    licenseSection = `This project is licensed under the [${license}](${renderLicenseLink(license)}).`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.projectTitle}
  
  ![License](${renderLicenseBadge(response.license)})
  
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
  
  ${renderLicenseSection(response.license)}
  
  ## Contributing
  
  ${response.contributing}
  
  ## Tests
  
  ${response.tests}
  
  ## Questions
  
  GitHub profile: [www.github.com/${response.gitHub}/](https://www.github.com/${
    response.gitHub
  }/)
  
  Email address: ${response.email}
  
  Feel free to send any additional questions to the e-mail address shown above.
  
  `;
}

module.exports = generateMarkdown;
