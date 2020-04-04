const fs = require('fs');
var wstream = fs.createWriteStream('readme-main.md');

function genhash(filename) {
    const crypto = require('crypto');

    const hash = crypto.createHash('sha1');
    const hashMd = crypto.createHash('md5');
    const input = fs.createReadStream(filename);
    input.on('readable', () => {

        const data = input.read();
        if (data) {
            hash.update(data);
            hashMd.update(data);
        }
        else {

            wstream.write(`${filename}  ${hash.digest('hex')}  ${hashMd.digest('hex')} \n`);
        }
    });
}

module.exports = {
    genhash: genhash,
};