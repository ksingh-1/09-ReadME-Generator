const fs=require("fs");
const inquirer=require("inquirer");
const axios=require("axios");
const util=require("util");
const generateMarkdown=require("./markdownGenerator");
const writeFileAsync=util.promisify(fs.writeFile);

const questions=[
    {
        message:"What Is The Name Of The Project?",
        answer: "title"
    },
    {
        message:"What Is This Project About?",
        answer:"describe"
    },
    {
        message:"What Can This Project Be Used?",
        answer:"utility"
    },
    {
        message:"Does This Project Have A License?",
        answer: "license"
    },
    {
        message:"Who Worked On This Project?",
        answer: "people"
    },
    {
        message:"What Is Your Contact Preference?",
        answer: "contact"
    },
    {
        message:"What Is Your Username?",
        answer:"username"
    },
    

]