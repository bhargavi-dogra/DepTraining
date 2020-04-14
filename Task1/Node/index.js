// const var = require('util/hello.js');
// var.

let hello = "Hello from node Js!!";
const path = require("path");
console.log(`The file name is ${path.basename(__filename)}`);
global.console.log(hello);
console.log(path.dirname(__filename));
console.log(__filename);
console.log(process.pid);
console.log(process.versions.node);

const [, , firstName, lastName] = process.argv;

console.log(`Hi my friend your name is ${firstName}  ${lastName}`);


// const fs = require("fs");
// fs.readdir("./utils", (err, files) => {


//     if (err) {
//         throw err;
//     }
//     console.log("files read");
//     console.log(files);
// });