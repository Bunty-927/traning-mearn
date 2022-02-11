function numberTable(num){
    for(let i=1;i<=num;i++)
    {
        setTimeout(() =>{
            console.log(i*2);
        },i*1000);
    }
}
function getNumber(num,callback)
{
    //calling the method multiplyNumber by using callback method
    callback(num);
    
}
//it call the method getNumber after one secon(getNumber,1000,multiplyNumber);
let num = window.prompt("enter the limit :");
getNumber(num,numberTable);