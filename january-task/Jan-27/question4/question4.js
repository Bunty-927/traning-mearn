//implementation of getNumber
async function getNumber () {
//creating the promise
let promise = new Promise((resolve, reject) =>{
    for (let i =1 ; i <= 10 ; i++){
        setTimeout(() => {
            console.log(i*2);
        }, i*1000);
    }
});
let result = await promise;
console.log(result);
}
//calling the getNumber function
getNumber();