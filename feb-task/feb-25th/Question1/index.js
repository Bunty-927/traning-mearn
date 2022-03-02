const http = require('http');



const fs = require('fs').promises;
const path = require('path');

const host = 'localhost';
const port = 8000;

//using json response
const data = require('./employee.json')
const requestListener = function(req, res) {
    res.setHeader("Content-type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(data))
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})

//using text format
const porttxt=8001;
const requestListener = function(req, res) {
    //res.setHeader("Content-type", "text/html");
    res.writeHead(200);
   res.end("Prashant kumar")
}

const server = http.createServer(requestListener);

server.listen(porttxt, host, () => {
    console.log(`Server is running on http://${host}:${porttxt}`);
})

//Using html format
const requestListener = function(req, res) {
    res.setHeader("Content-type", "text/html");
    res.writeHead(200);
    res.end(`<html><body><h1>This is HTML</h1></body></html>`);  
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})