const path = require('path');

module.exports = {
    PORT: 8080,
    dbDumpFile: path.resolve(__dirname, '../../db/dump.json'),
    imagesDir: path.resolve(__dirname, '../../files/images/')
};