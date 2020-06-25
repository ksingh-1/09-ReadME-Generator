function generateMarkdown(answers, data) {
    return '
}

<h2 align="center">${answers.title}</h2>

<p align="center" margin="50px">
    <a>
    <img src="https://img.shields.io/badge/Creator-KSingh-orange"/></>
    </a>
    
    <a>
    <img src="https://img.shields.io/badge/License-MIT-blue"/></>
    </a>
</p>

## Description
${answers.Description}

## Table of Contents
* *[Title](#title)*
* *[Descripton](#description)**
* *[Usage](#usage)**
* *[License](#license)**
* *[Contributing](#contributors)**
* *[Tests](#tests)**
* *[Questions](#questions)**

{/*  */}

## *Installation*
To Install necessary dependencies, run the command:
\'\'\'sh
${answers.install}
\'\'\'

## *Usage*
To use the ReadME Generator, run the command:
\'\'\'sh
${answers.use}
\'\'\'

## *License*
This Project is Licenced with the ${answers.License} License.


## *Contributors* 
Contributed in part by:
${answers.contributors}

## *Contact*
${answers.email}
';
}
module.exports=generateMarkdown;