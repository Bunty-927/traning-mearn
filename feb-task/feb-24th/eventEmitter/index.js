const eventEmitter = require("events");
const eventemitter = new eventEmitter();
let count = 1;
eventemitter.on('counting',()=>{
    
    count=0;
    function fun(){
        count++;
        setTimeout(()=>{
            console.log(count);
           fun();
        },3000);
    }
    fun();
})

eventemitter.emit('counting');