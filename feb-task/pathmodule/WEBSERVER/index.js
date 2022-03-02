const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("Hello from the other side");
});

server.listen(8000,"localhost",()=>{
    console.log("listening to the port on 8000");
});