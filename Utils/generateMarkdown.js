function generateMarkdown (data, imgURL) {
    return `
    ![GitHub Activity](https://img.shields.io/github/commit-activity/m/ksingh-1/09-ReadME-Generator?style=plastic);

<h2 align="center">${data.Title}</h2>
var profilePicture="https://avatars3.githubusercontent.com/u/62266210?s=460&u=1c47aa17b802cffd7d2a7c07a8fc9209ac2c18c8&v=4";
<p align="center" margin="50px">
    <a>
    <img src="https://img.shields.io/badge/Creator-KSingh-orange"/><a/>
    </a>
    
    <a>
    <img src="https://img.shields.io/badge/License-MIT-blue"/><a/>
    </a>
</p>

## Description
${data.Description}

## Table of Contents
* *[Title](#title)*
* *[Description](#description)*
* *[Usage](#usage)*
* *[License](#license)*
* *[Contributors](#contributors)*
* *[Tests](#tests)*
* *[Questions](#questions)*


## Installation
To Install necessary dependencies, run the command:
\`\`\`sh
${data.Install}
\`\`\`

## Usage
To use the ReadME Generator, run the command:
\`\`\`sh
${data.Usage}
\`\`\`

## License
This Project is Licenced with the ${data.License} License.


## Contributors
Contributed in part by:
${data.Contributors}

## Contact
${data.Email}


## *Questions*
<img src="${imgURL}" alt="avatar" style="border-radius: 15px" width="60"/>
If you have any questions about the repo, open an issue or contact (https://github.com/${data.Username}/${data.Title}})
or reach me directly at <${data.Email}>.
`;
}
module.exports=generateMarkdown;

