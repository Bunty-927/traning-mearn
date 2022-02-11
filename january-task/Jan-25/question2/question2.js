async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  //function definition f()
  function f() {
    //calling function wait() 
    //it shows 10 after 1 second
    wait().then(result => console.log(result));
  }
  //a normal function call
  f();