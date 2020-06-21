function generateMarkdown(answers, data) {
    return
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
${answers.description}

## Contents<br>
*[Installation](#Installation)**<br>
*[Use](#Use)**<br>
*[License](#License)**<br>
*[Contributors](#Contributors)**<br>
*[Tests](#Tests)**<br>
*[Contact](#Contact)**<br>
{/*  */}
## *Installation*<br>
${answers.install}

## *Usage*<br>
${answers.use}

## *License* <br>
${answers.license}

## *Contributors* <br>
${answers.contributors}

## *Contact* <br>
${answers.email}<br>


module.exports=generateMarkdown