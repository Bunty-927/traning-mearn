const path = require('path');
// base name
let result = path.basename('document/d/users/index.js');
console.log(result);

// path.dirname(path)
let res = path.dirname('document/d/users/index.js');
console.log(res);

// path.extname(path)
let ext = path.extname('document/d/users/index.js');
console.log(ext);


//b. Change the basename using path.format()
// path.format(pathObj)

let pathToFile = path.format({
    dir: 'document/d/users/index.js',
    base: 'app.js'
});

console.log(pathToFile);

//c. Using path.parse() print the dirname of
//document/d/users/index.js

let pathObj = path.parse('document/d/users/index.js');
console.log(pathObj);