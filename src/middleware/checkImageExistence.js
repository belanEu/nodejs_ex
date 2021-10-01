const imageStore = require('../services/ImageStore');
const { existsSync } = require('fs');
const path = require('path');
const { imagesDir } = require('../config/config');

module.exports = (req, res, next) => {
    const id = req.params.id; 
    const image = imageStore.findOne(id);

    if (image) {
        if (!existsSync(path.resolve(imagesDir, image.name))) {
            res.status(404).send('Картинка не найдена :(');
        }
        next(req, res);
    } else {
        res.status(404).send('Данные о картинке не найдены :(');
    }
};