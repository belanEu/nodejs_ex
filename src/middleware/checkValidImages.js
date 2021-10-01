const imageStore = require('../services/ImageStore');
const { existsSync } = require('fs');
const path = require('path');
const sizeOf = require('image-size');
const { imagesDir } = require('../config/config');

module.exports = (req, res, next) => {
    const idFrontImage = req.query.front,
    idBackImage = req.query.back;

    const frontImage = imageStore.findOne(idFrontImage),
    backImage = imageStore.findOne(idBackImage);

    if (!(frontImage && backImage)) {
        res.sendStatus(404);
    }

    const frontImageFile = path.resolve(imagesDir, frontImage.name),
    backImageFile = path.resolve(imagesDir, backImage.name);

    if (!(
        existsSync(frontImageFile)
        &&
        existsSync(backImageFile)
        )) {
        res.sendStatus(404);
    }

    const dimensionsOfFrontImage = sizeOf(frontImageFile),
    dimensionsOfBackImage = sizeOf(backImageFile);

    if (!(
        dimensionsOfFrontImage.width === dimensionsOfBackImage.width
        &&
        dimensionsOfFrontImage.height === dimensionsOfBackImage.height
        )) {
            res.sendStatus(400);
        }

    next();
};