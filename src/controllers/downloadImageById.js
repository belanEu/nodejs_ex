const imageStore = require('../services/ImageStore');
const config = require('../config/config');
const path = require('path');

module.exports = (req, res) => {
    const id = req.params.id;

    const image = imageStore.findOne(id);

    const pathToImage = path.resolve(config.imagesDir, image.name);
};