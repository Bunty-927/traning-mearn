//Definition of powerSeries function
function* powerSeries(i){
        yield Math.pow(i, 2);
    
}
function takeInput(){
   let y = window.prompt("enter the limit of power series :");
   for(let i=1;i<=y;i++)
   {
        let result = powerSeries(i);
        console.log("power of "+i+" is = "+result.next().value);
   }
}
takeInput();
