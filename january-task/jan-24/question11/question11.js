// Creating an new promise and resolving nitish kumar
const promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('10');
    }, 3000);
});

promise1.then((value) => {
    console.log(value);

});

// output will be : [object Promise]
console.log(promise1);