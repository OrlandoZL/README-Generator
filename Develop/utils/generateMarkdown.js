// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  }
  else {
    return `[![license ${license}](https://img.shields.io/badge/License-${license}-0298c3.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://choosealicense.com/licenses/mit/"
  }
  if (license === "Apache") {
    return "https://www.apache.org/licenses/LICENSE-2.0"
  }
  if (license === "Mozilla") {
    return "https://www.mozilla.org/en-US/MPL/2.0/"
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ""
  }
  else {
    return `## License
    This project is using the ${license} license. click on the link for more info.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Have any further questions?
  Email: ${data.email}
  Github: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
