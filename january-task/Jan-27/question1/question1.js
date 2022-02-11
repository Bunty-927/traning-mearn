function calculateAge(current_age){
    return("your age is = "+current_age);
}
function getAge(callback){
    let age = window.prompt("enter the age :");
    //calling the calculateAge method by using callback 
    console.log(callback(age));
}
//calling the method getAge and passing calculateAge method as an argument
getAge(calculateAge);