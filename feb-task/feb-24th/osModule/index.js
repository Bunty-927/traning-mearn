const os = require("os");

//finding the architecture of os
// console.log(os.arch());

//finding the free memory()/(RAM)
//console.log(`${os.freemem()/1024/1024/1024}`);

//finding the total memory size
// console.log(`${os.totalmem()/1024/1024/1024}`);

//finding the host name
// console.log(os.hostname());

//finding the os plateform
// console.log(os.platform());

//finding the current dir path
// console.log(os.tmpdir());

//finding the os type
// console.log(os.type());

//finding the CPU information
console.log(os.cpus());