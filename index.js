const fs=require("fs");
const inquirer=require("inquirer");
const axios=require("axios");
const util=require("util");
const generateMarkdown=require("./Utils/generateMarkdown");
const writeFileAsync=util.promisify(fs.writeFile);

const questions=[
    {
        type: "input",
        name: "Name",
        message:"What Is Your Username?",
        default: () => {
            return "ksingh-1";
        },
    },
    {
        type: "input",
        name: "Title"
        message:"What Is The Name Of The Project?",
        answer: "title"
    },
    {
        type: "input",
        message:"What Is This Project About?",
        answer:"description"
    },
    {
        type: "input",
        name: "Install"
        message:"How do you install your software?",
        default: () => {
            return "npm install";
        },
    },
    {
        type: "list",
        message:"Project Licensed By:",
        choices: ["Apache 2.0", "GPL 3.0", "MIT", "ISC", "None"],
    },
    {
        type: "input",
        name: "Usage",
        message: "How do you use your software?",
        default: () => {
            return "node index.js";
        },
    },
    {
        type: "input",
        message:"Who Worked On This Project?",
        answer: "contributors"
        default: () => {
            return "Kulpreet Singh";
    },
    {
        type: "input",
        message:"What Is Your Contact Preference?",
        answer: "contact"
    },
    {
        type:"input",
        message:"What is your email?"
        data:"email"
    },

];
//
// function writeToFile (fileName, data){
//     fs.writeFile(fileName, data, function(err){
//         if (err) throw err
//     });
// }

// function init () {
//     return inquirer.prompt(input)
//         .then(function (data){
//             markdown(data);
//             const userMarkdown=markdown(data);
//             api.getUser(data.username);
//             writeToFile(`${data.title}.md`, userMarkdown);
//             console.log("Success!");
//         })
//         .catch(function (err){
//             console.log(err);
//         });
// }
// init();
//
function promptUser() {
    return inquirer.prompt(questions)
};

function avatarQuery(data) {
    const queryURL=`https://api.github.com/users/${data.Name}`;
    
    return axios.get(queryURL).then((response) => {
        const imURL=response.data.avatar_url;
        return imURL;
    });
}
async function init(){
    console.log("ReadMe Generator Online");

    try {
        const data=await askUser();
        let github=await axios.get(`https://api.github.com/users/${data.username}`)
        const md=generateMarkdown(data, github.data);
        await writeFileAsync("ReadME.md", markdownFile);
        console.log("ReadME file generated");
    } catch (err) {
        console.log(err);
    }
}

init();