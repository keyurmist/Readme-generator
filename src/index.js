const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = ({ title, description, installation, usage, license, contribute, test, email, github}) =>
`#${title}

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

\```
${installation}
\```

## Getting Started

Please follow the instructions below to run the application:
\```
${usage}
\```

## License

This Project is license under ${license}

## Contributing

Ways to contribute to the project include:

${contribute}

## Tests

Follow the instructions below:

${test}

## Questions

You can e-mail me at:${email}

Visit my GitHub ![here](https://github.com/${github})
`

const p