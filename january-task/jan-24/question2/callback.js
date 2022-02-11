//function to filter the odd and even element
function Array(array,length) {
    let oddArray = [];
    let evenArray = [];
    for(let i=0;i<length;i++)
    {
        if(array[i]%2==0)
        {
            evenArray.push(array[i]);
        }
        else
            oddArray.push(array[i]);
    }
    //display the element of odd and even array
    console.log("even array is = "+evenArray);
    console.log("odd array is = "+oddArray);
}

function processUserInput(callback){
    //taking the length of array
    length = window.prompt("Enter the length of an array : ");
    for(let i=0;i<length;i++)
    {
        array[i] = window.prompt("enter the elementy into the array");//Inserting the element into the array
    }
    Array(array,length);
}


//declaring the empty array;
let array = [];
let length;
processUserInput();