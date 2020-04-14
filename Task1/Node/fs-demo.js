const ghash = require('./hash-generation.js');

const fs = require("fs");
const paths = fs.readdirSync("./utils");
const path = require("path");
//TODO check if utils is path or directory ?
console.log(process.argv);
const [, , directoryname] = process.argv;
var stats = fs.statSync(path.join('./',directoryname));
console.log('Is utlis a file or directory ?');
console.log('is file ? ' + stats.isFile());
console.log('is directory ? ' + stats.isDirectory());

//TODO
//  read all file names in the directory
// if you find a directory inside a path you go read recursively

console.log('All files and Directory names listed : ');
async function printDirectoryAndFileNames(p) {
    const dir = await fs.promises.opendir(p);
    for await (const dirent of dir) {

        if (dirent.isDirectory()) {
            //recursively calling to print file names inside directory
            console.log(' directory  ' + dirent.name);
            printDirectoryAndFileNames(path.join(p,'/' , dirent.name.toString())).catch(console.error);
                   //    printDirectoryAndFileNames(path.join("/",dirent.name.toString())).catch(console.error);

        }
        else {
            console.log('dirctory :' + p + '  file name :  ' + dirent.name);


            //generating hash sha1 and md5 codes and writing to readme-main.md
            ghash.genhash(path.join(p , '/' , dirent.name));

        }
    }
}
printDirectoryAndFileNames('./utils').catch(console.error);


