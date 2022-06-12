const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  license,
  contribute,
  test,
  email,
  github,
}) =>
  `# ${title} ![License](https://img.shields.io/badge/${license}-License-orange)

   ## Table of Contents
   - [Description](#Description)
   - [Installation](#Installation)
   - [Getting Started](#Getting Started)
   - [License](#License)
   - [Contributing](#Contributing)
   - [Tests](#Tests)
   - [Questions](#Questions)

   ## Description

   ${description}

   ## Installation

   Please follow the instructions on how to install the application:

   \`\`\`
   ${installation}
   \`\`\`

   ## Getting Started

   Please follow the instructions below to run the application:
   \`\`\`
   ${usage}
   \`\`\`

   ## License

   This Project is licensed under ${license} ![license](https://img.shields.io/badge/${license}-License-orange)

   ## Contributing

   Ways to contribute to the project include:

   ${contribute}

   ## Tests

   Follow the instructions below:

   ${test}

   ## Questions

   You can e-mail me at:${email}

   Visit my GitHub ![here](https://github.com/${github})
   `;

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Please enter the title of your project",
      validate: async (answer) => {
        if (!answer) {
          return "Please enter a valid title";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a short description of your project",
      validate: async (answer) => {
        if (!answer) {
          return "Please enter a description";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "installation",
      message:
        "Please give instructions on how to install the application, if any",
    },
    {
      type: "input",
      name: "usage",
      message: "Please give instructions on how to use the application",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please select a license for your project",
      choices: [
        "Apache",
        "MIT",
        "GNU:General Public License",
        "BSD 2-Clause",
        "BSD 3-Clause",
      ],
      validate: async (answer) => {
        if (answer.length < 1) {
          return "Please select a valid license";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "contribute",
      message:
        "Please give details on how to contribute to the project or type none",
    },
    {
      type: "input",
      name: "test",
      message: "Please give details on how to test the project or type none",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter you e-mail address",
      validate: async (answer) => {
        if (!answer) {
          return "Please enter a valid email address";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub username",
      validate: async (answer) => {
        if (!answer) {
          return "Please enter a valid username";
        }
        return true;
      },
    },
  ]);
};

const init = () => {
  promptUser()
    .then((answer) =>
      fs.writeFileSync("renderedreadme.md", generateMarkdown(answer))
    )
    .then(() => console.log("Successfully created readme"))
    .catch((err) => console.error(err));
};

init();
