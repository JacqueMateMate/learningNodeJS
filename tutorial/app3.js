//readline module : prompts the user and gets user input
//The readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time. It can be accessed using:
//const readline = require('readline');



const readline = require('readline');
const rl =readline.createInterface({ // conf file
    input:process.stdin,
    output:process.stdout
})

let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);
let answer = num1 + num2;

rl.question( `What is ${num1} + ${num2}? \n`,
(userInput)=>{
    if(userInput.trim()==answer){
        rl.close();
    } else{
        rl.setPrompt('Incorrect response please try again\n') //set the prompt
        rl.prompt(); //Call the prompt
        rl.on('line', (userInput)=>{
            if(userInput.trim() == answer){
                rl.close();
            }
            else{
                rl.setPrompt(`Your answer of ${userInput} is incorrect. \n`)
                rl.prompt();
            
        } 
    });
    
    console.log(userInput);
}
});

rl.on('close', ()=>{
    console.log('Correct!!!')
});

