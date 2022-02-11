//initialization of sumOfElement
function sumOfElement(array){
    var res = 0;
    for(var i=0;i<array.length;i++){
        res=res+array[i];
    }
    return res;
}
//initialization of sum function
function sum(array,callback){

    //calling sumOfElement function by using callback function
    var result=callback(array);
    console.log("sum of element is = "+result);
}

//declaring an array
var arr=[1,2,3,4,5];

//calling sum function and passing array and sumofelement function as an argument
sum(arr,sumOfElement)