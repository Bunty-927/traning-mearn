function accepted(number){
    alert(number +" given number is multiple of two");
}

function rejected(number){
    alert(number+" given number is not multiple of two");
}

const processUserInput = new Promise((resolve,reject)=>{
    var number = window.prompt("enter a number :");
    if(number%2==0){
        resolve(number);
    }
    else{
        reject(number);
    }

})

processUserInput.then((number) => accepted(number),num =>  rejected(num));


