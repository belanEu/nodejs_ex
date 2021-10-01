const { replaceBackground } = require('backrem');
const { createReadStream } = require('fs');
const imageStore = require('../services/ImageStore');
const { imagesDir } = require('../config/config');
const path = require('path');
    
module.exports = async(req, res) => {
    const query = req.query;

    const frontImageId = query.front, backImageId = query.back,
    color = query.color.split(',').map(item => +item),
    threshold = +query.threshold;

    const fontImage = imageStore.findOne(frontImageId),
    backImage = imageStore.findOne(backImageId);

    const frontImageFile = path.resolve(imagesDir, fontImage.name),
    backImageFile = path.resolve(imagesDir, backImage.name);

    const frontImageStream = createReadStream(frontImageFile),
    backImageStream = createReadStream(backImageFile);

    res.set('Content-Disposition', `attachment; filename="merged_${fontImage.name}"`);
    res.set('Content-Type', fontImage.mimeType);

    replaceBackground(frontImageStream, backImageStream, color, threshold)
    .then(readableStream => readableStream.pipe(res));
};