const http = require("http");
const fs = require("fs");
const path = require("path");

const host = "localhost";
const port = 8000;

//using JSON response
const data = require('./employee.json')
const requestListener = function(req,res){
    res.setHeader("content-type","application/json");
    res.writeHead(200);
    res.end(JSON.stringify(data))
}

const server = http.createServer(requestListener);
server.listen(port,host,()=>{
    console.log(`server is currently running on http${host}:${port}`);
})