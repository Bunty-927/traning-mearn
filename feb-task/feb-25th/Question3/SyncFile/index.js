const fs = require("fs");
const { setFlagsFromString } = require("v8");

//creating the new file by using "writeFileSync" :- this method is used to create the new file 
//if file is not exists and add the content into the file. it is a Synchronous file
//fs.writeFileSync("read.txt","this is the text file");


//appending the file by using the "appndFileSync()""
//fs.appendFileSync("read.txt","now i am learning the file system");

//to read the file we use the "readFileAsync()" function but it will return buffer data so we need to convert it into the string formate
//by using the "toString()" method.
// const data = fs.readFileSync("read.txt");
// console.log(data);
// const orig_data= data.toString();
// console.log(orig_data);

//To rename the file we use the "renameSync()" function which contain two argument 1>older filename 2>new filename
//fs.renameSync("read.txt","text.txt");