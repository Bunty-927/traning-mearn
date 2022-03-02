const fs = require("fs");
//1>CREATE OPERATION
//creating a new text file
// fs.writeFile("text.txt","this the Synchronous file System. ",(err)=>{
//     console.log("file is created successfully");
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//         console.log("there is no error");
// });

//2>READ OPERATION
// fs.readFile("text.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("error is :- "+err);
//     }
//     else{
//         console.log("Original Contents are :- "+data);
//     }
// });

//3>UPDATE OPERATION
//Appending the text file
// fs.appendFile("text.txt","file is appended",(err)=>{
//     if(err){
//         console.log("error is  :- "+err);
//     }
//     else{
//         console.log("there is no any error and file is updated successfully");
//     }
// });

//RENAME FILE
fs.rename("text.txt","Content.txt",(err)=>{
    if(err){
        console.log("error is = "+err);
    }
    else{
        console.log("file is rename successfully");
    }
});

// //4>DELETE OPERATION
// fs.unlink("Content.txt",(err)=>{
//     if(err){
//         console.log("error is = "+err);
//     }else{
//         console.log("file is deleted successfully");
//     }
// });


