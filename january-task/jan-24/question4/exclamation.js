const exclaim = (str1) => `${str1}!`;

function Exclamed(string){
    let str="";
    do{
        console.log("After adding ! = "+ exclaim(string));
        str = window.prompt("If you want to continue prass 'y' else 'n' "); 
    }while(str == 'y');
}
let string = window.prompt("Enter the string :");
Exclamed(string);