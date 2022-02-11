let promise1 = new Promise((resolve, reject) => {

    let fetchRes = fetch(
        "https://www.javascripttutorial.net/sample/promise/api.json");


    // fetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(d => {
        console.log(d);
    });
});