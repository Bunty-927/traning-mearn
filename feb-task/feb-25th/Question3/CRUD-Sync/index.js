const fs = require("fs");

//creating a new file
// fs.writeFileSync("text.txt","This is text File");

//appending the file
// fs.appendFileSync("text.txt",". Now i am learning the node.");

//reading the content of text file
//it returns the fuffer data
//utf:- helps us to encode the data in original form
const data = fs.readFileSync("text.txt","utf8");
// const original_data = data.toString();
// console.log(original_data);
console.log(data);

//to delete the file we use the unlinkSync() method
//fs.unlinkSync("text.txt"); 

//to delete the folder we use the rmdirSync() method
//fs.rmdirSync("CRUD");
