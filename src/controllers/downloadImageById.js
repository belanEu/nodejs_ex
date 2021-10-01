const imageStore = require('../services/ImageStore');
const config = require('../config/config');
const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
    const id = req.params.id;

    const image = imageStore.findOne(id);

    const pathToImage = path.resolve(config.imagesDir, image.name);
    let readStream = fs.createReadStream(pathToImage);
    res.set('Content-Disposition', `attachment; filename="image_${image.name}"`);
    res.set('Content-Type', image.mimeType);

    readStream.pipe(res);
};