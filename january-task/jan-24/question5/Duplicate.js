
const doublecharacter = (str) =>str.split('').map(c =>`${c}${c}`).join('');

function getInput()
{
    let string = window.prompt("enter the string :");
    
    console.log("Duplicate character is = "+doublecharacter(string));
}
getInput();