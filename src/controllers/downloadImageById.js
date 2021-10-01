const imageStore = require('../services/ImageStore');
const config = require('../config/config');
const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
    const id = req.params.id;

    const image = imageStore.findOne(id);
    console.log(image);

    const pathToImage = path.resolve(config.imagesDir, image.name);
    console.log(pathToImage);
    let readStream = fs.createReadStream(pathToImage);

    readStream.pipe(res);
};