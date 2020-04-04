const ghash = require('./hash-generation.js');

const fs = require("fs");
const path = fs.readdirSync("./utils");
//TODO check if utils is path or directory ?
var stats = fs.statSync("./utils");
console.log('Is utlis a file or directory ?');
console.log('is file ? ' + stats.isFile());
console.log('is directory ? ' + stats.isDirectory());

//TODO
//  read all file names in the directory
// if you find a directory inside a path you go read recursively

console.log('All files and Directory names listed : ');
async function print(path) {
    const dir = await fs.promises.opendir(path);
    for await (const dirent of dir) {

        if (dirent.isDirectory()) {
            //recursively calling to print file names inside directory
            console.log(' directory  ' + dirent.name);
            print(path + '/' + dirent.name.toString()).catch(console.error);
        }
        else {
            console.log('dirctory :' + path + '  file name :  ' + dirent.name);


            //reading all the file contents to console
            fs.readFile((path + '/' + dirent.name.toString()), 'utf8', (err, data) => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log(data)
            })
            //generating hash sha1 and md5 codes and writing to readme-main.md
            ghash.genhash(path + '/' + dirent.name);

        }
    }
}
print('./utils').catch(console.error);


