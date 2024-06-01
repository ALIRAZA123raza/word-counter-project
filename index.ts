#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.bold.green("\n\t\twelcom to my word counter\n\t\t"));
console.log("=".repeat(60))

let user_answer = await inquirer.prompt([{
    name:"sentance",
    type:"input",
    message:"Enter a sentance? "
}]);

let words = user_answer.sentance.trim().split(" ");
console.log("=".repeat(60))
console.log("\n\tSentance Word")

console.log(words)

console.log(`\n\tword count ${words.length}`)
console.log("=".repeat(60))