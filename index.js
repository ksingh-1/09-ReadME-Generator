const fs=require("fs");
const inquirer=require("inquirer");
const axios=require("axios");
const util=require("util");
const generateMarkdown=require("./Utils/generateMarkdown");
const writeFileAsync=util.promisify(fs.writeFile);

const questions=[
    {
        type: "input",
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
        message:"What Can This Project Be Used For?",
        answer:"usage"
    },
    {
        type: "input",
        message:"Does This Project Have A License?",
        answer: "license"
    },
    {
        type: "input",
        message:"Who Worked On This Project?",
        answer: "contributors"
    },
    {
        type: "input",
        message:"What Is Your Contact Preference?",
        answer: "contact"
    },
    {
        type: "input",
        message:"What Is Your Username?",
        answer:"username"
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
//             writeToFile('${data.title}.md', userMarkdown);
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
    const queryURL='https://api.github.com/users/${data.Name}';
    
    return axios.get(queryURL).then((response) => {
        const imURL=response.data.avatar_url;
        return imURL;
    });
}
async function init(){
    console.log("ReadMe Generator 'On'");

    try {
        const data=await askUser();
        let github=await axios.get('https://api.github.com/users/${data.username}')
        const md=generateMarkdown(data, github.data);
        await writeFileAsync("ReadME.md", md);
        console.log("ReadME file generated");
    } catch (err) {
        console.log(err);
    }
}

init();