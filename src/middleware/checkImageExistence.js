const imageStore = require('../services/ImageStore');
const { exists } = require('../utils/fs');
const path = require('path');
const { imagesDir } = require('../config/config');

module.exports = async(req, res, next) => {
    const id = req.params.id; 
    const image = imageStore.findOne(id);

    if (image) {
        if (!(await exists(path.resolve(imagesDir, image.name)))) {
            return res.sendStatus(404);
        }
        next();
    } else {
        res.sendStatus(404);
    }
};