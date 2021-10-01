const imageStore = require('../services/ImageStore');
const { exists } = require('../utils/fs');
const path = require('path');
const sizeOf = require('image-size');
const { imagesDir } = require('../config/config');

module.exports = async(req, res, next) => {
    const idFrontImage = req.query.front,
    idBackImage = req.query.back;

    const frontImage = imageStore.findOne(idFrontImage),
    backImage = imageStore.findOne(idBackImage);

    if (!(frontImage && backImage)) {
        return res.sendStatus(404);
    }

    const frontImageFile = path.resolve(imagesDir, frontImage.name),
    backImageFile = path.resolve(imagesDir, backImage.name);

    if (!(
        await exists(frontImageFile)
        &&
        await exists(backImageFile)
        )) {
        return res.sendStatus(404);
    }

    const dimensionsOfFrontImage = sizeOf(frontImageFile),
    dimensionsOfBackImage = sizeOf(backImageFile);

    if (!(
        dimensionsOfFrontImage.width === dimensionsOfBackImage.width
        &&
        dimensionsOfFrontImage.height === dimensionsOfBackImage.height
        )) {
            return res.sendStatus(400);
        }

    next();
};