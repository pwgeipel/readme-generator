// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  
  const {title, motivation, whyBuild, problem, install, learn, usage, screenshot, collaborators, tutorials, license, test, email, github} = data
  return `
  # ${data.title}

  ## Description

    - ${data.motivation}
    - ${data.whyBuild}
    - ${data.problem}
    - ${data.install}

  ## Table of Contents

    -[Installation](#installation)
    -[Usage](#usage)
    -[Credits](#credits)
    -[License](#license)
    -[Tests](#tests)
    -[Questions](#questions)

  ## Installation
  In order to install this application, please follow these steps:
  - ${data.install}

  ## Usage

  ![alt text](${data.screenshot})

  ## Credits

  - ${data.collaborators}
  - ${data.tutorials}

  ## License

  - ${data.license}

  ## Tests

  - ${data.test}

  ## Questions
  If you have any questions, please contact me at ${data.email}.  You may also see more of my projects at [${data.github}](https://github.com/${data.github}/).
  `;
}

export default generateMarkdown;
