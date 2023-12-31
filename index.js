const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
import 'bootstrap/dist/css/bootstrap.min.css';
const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
        validate: answer => {
            if (answer !== "") {
                return true
            }
            return "Please enter at least one character."
        }
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?",
        validate: answer => {
            if (answer !== "") {
                return true
            }
            return "Please enter at least one character."
        }
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email address?",
        validate: answer => {
            if (answer !== "") {
                return true
            }
            return "Please enter at least one character."
        }
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
        validate: answer => {
            if (answer !== "") {
                return true
            }
            return "Please enter at least one character."
        }
    }
]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
    console.log(manager)
    team.push(manager)
    addEmployee()
})  

const team = []

function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ]).then(answer => {
        switch (answer.role) {
            case "Engineer":
                addEngineer()
                break;
            case "Intern":
                addIntern()
                break;
            default:
                buildTeam()
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's id?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Please enter at least one character."
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        console.log(engineer)
        team.push(engineer)
        addEmployee()
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's id?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's school?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Please enter at least one character."
            }
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        console.log(intern)
        team.push(intern)
        addEmployee()
    })
}

function buildTeam() {
    fs.writeFileSync(outputPath, render(team), "utf-8")
}