const fs=require("fs");
const inquirer=require("inquirer");
const axios=require("axios");
const util=require("util");
const generateMarkdown=require("./Utils/generateMarkdown");
const writeFileAsync=util.promisify(fs.writeFile);

const questions=[
    {
        type: "questions",
        message:"What Is The Name Of The Project?",
        answer: "title"
    },
    {
        type: "questions",
        message:"What Is This Project About?",
        answer:"description"
    },
    {
        type: "questions",
        message:"What Can This Project Be Used?",
        answer:"use"
    },
    {
        type: "questions",
        message:"Does This Project Have A License?",
        answer: "license"
    },
    {
        type: "questions",
        message:"Who Worked On This Project?",
        answer: "contributors"
    },
    {
        type: "questions",
        message:"What Is Your Contact Preference?",
        answer: "contact"
    },
    {
        type: "questions",
        message:"What Is Your Username?",
        answer:"username"
    },
    {
        type:"questions",
        message:"What is your email?"
        answer:"email"
    },

];

function askUser() {
    return inquirer.prompt(questions)
};

async function init(){
    console.log("ReadMe Generator 'On'");
}

    try {
        const answers=await askUser();
        let github=await axios.get('https://api.github.com/users/${answers.username}')
        const md=generateMarkdown(answers, github.data);
        await writeFileAsync("ReadME.md", md);
        console.log("ReadME file generated");
    } catch (err) {
        console.log(err);
    }
};

init();