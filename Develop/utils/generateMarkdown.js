// This function  returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let licenseBadge;
  switch (license) {

    case 'MIT':
      licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'Apache 2.0':
      licenseBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    case 'EPL 1.0':
      licenseBadge = '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)';
      break;
    case 'ISC':
      licenseBadge = '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
      break;
    case 'BSD 3-Clause':
      licenseBadge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
      break;
    default:
      licenseBadge = '';
  }
  return licenseBadge;
}

// This function returns the license link
function renderLicenseLink(license) {

  let licenseLink;
  switch (license) {

    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'Apache 2.0':
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'EPL 1.0':
      licenseLink = 'https://opensource.org/licenses/EPL-1.0';
      break;
    case 'ISC':
      licenseLink = 'https://opensource.org/licenses/ISC';
      break;
    case 'BSD 3-Clause':
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    default:
      licenseLink = '';
  }
  return licenseLink;
}

// This function returns the license section of README
function renderLicenseSection(license) {
  const licenseSection = `[${renderLicenseBadge(license)}](${renderLicenseLink(license)})`;
  console.log(licenseSection);
  return licenseSection;
}

// This function generates markdown for README
function generateMarkdown(data) {

  const markDown =
    `# ${data.title}\n
${renderLicenseSection(data.license)}

## Description :
${data.description}
            
## Table of contents :

* [License](#License)
* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
* [Contributing](#Contributing)
* [Questions](#Questions)

## License
This project is licensed under ${data.license}.

## Installation
To install dependencies ,run the following command :\n
\`\`\`
${data.installation}
\`\`\`

## Usage
The application will run by using the following command:
\`\`\`
${data.use}
\`\`\`

## Tests
To run tests ,run the following command : \n
\`\`\`bash
${data.test}
\`\`\`

## Contributing
${data.contributing}

## Questions
If you have any questions about the repo,please reach out to me :
* Github : [${data.username}](https://github.com/${data.username})
* Email : [${data.email}](${data.email})`

  return markDown;
}

module.exports = generateMarkdown;
