const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('prashant kumar');
    }, 100);
});

promise1.then((value) => {
    console.log(value);

});

// output will be :- object Promise
console.log(promise1);