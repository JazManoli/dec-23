// write a program that asks a user to input a number greatwr than 10. Keep asking until the user provides a valid number

//user prompt.sync
// use while loop
const prompt = require('prompt-sync')();

// loop (either for or while)
// condition number > 10 (valid). If user entered number <-10 (invalid and keep asking)
// get input from the user

let number = prompt('Please enter a number greater than 10: ');

while (number <=10){
    number - prompt (" invalid input, please enter a number greaer than 10: ")
}

console.log('you entered a valid number')


//loop
// prompt

//condition: number is greater than 10