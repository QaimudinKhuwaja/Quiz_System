#! /usr/bin/cnv node 
import inquirer from "inquirer"
import chalk from "chalk"

const quiz : {
    Question_1 : string;
    Question_2 : string;
    Question_3 : string;
    Question_4 : string;
    Question_5 : string;

} = await inquirer.prompt([{
    type: "list",
    name: "Question_1",
    message: "What does TypeScript compile to?",
    choices: ["A) JavaScript", "B) Java", "C) C++", "D) TypeScript"]//A
},
{ 
    type: "list",
    name: "Question_2",
    message: "Which keyword is used to define a variable in TypeScript that cannot be reassigned?",
    choices: ["A) let", "B) const", "C) var", "D) static"]//B
},
{
    type: "list",
    name: "Question_3",
    message: "Which symbol is used to denote the type any in TypeScript?",
    choices: ["A) *", "B) ?", "C) !", "D) :"]//D
},
{
    type: "list",
    name: "Question_4",
    message: "What does TypeScript bring to JavaScript development?",
    choices: ["a) Static typing", "b) Dynamic typing", "c) No typing", "d) Weak typing"]
},
{
    type: "list",
    name: "Question_5",
    message: "Which keyword is used in TypeScript to declare a variable with a specific type?",
    choices: ["a) var", "b) let", "c) type", "d) declare"]//C

}
]);

let score = 0;

switch(quiz.Question_1){
     case  "A) JavaScript" :
console.log(chalk.blue ("1) Correct"));
    ++score
    break;
    default :
    console.log(chalk.red( "1) Incorrect"));
}


switch(quiz.Question_2){
    case  "B) const" :
console.log(chalk.blue ("2) Correct"));
   ++score
   break;
   default :
   console.log(chalk.red ("2) Incorrect"));
}

switch(quiz.Question_3){
    case  "D) :" :
console.log(chalk.blue ("3) Correct"));
   ++score
   break;
   default :
   console.log(chalk.red ("3) Incorrect"));
}

switch(quiz.Question_4){
    case  "a) Static typing" :
console.log(chalk.blue ("4) Correct"));
   ++score
   break;
   default :
   console.log(chalk.red ("4) Incorrect"));
}

switch(quiz.Question_5){
    case  "c) type" :
console.log(chalk.blue ("5) Correct"));
   ++score
   break;
   default :
   console.log(chalk.red ("5) Incorrect"));
}
console.log(score);

