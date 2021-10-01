const imageStore = require('../services/ImageStore');
const { imagesDir } = require('../config/config');
const fs = require('../utils/fs');
const path = require('path');

module.exports = async(req, res) => {
    id = req.params.id;
    const image = imageStore.findOne(id);
    await fs.removeFile(path.resolve(imagesDir, image.name));
    imageStore.remove(id);

    res.json({"id": id});
};