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

    const frontImageFile = path.resolve(imagesDir, imageStore.findOne(frontImageId).name),
    backImageFile = path.resolve(imagesDir, imageStore.findOne(backImageId).name);

    const frontImageStream = createReadStream(frontImageFile),
    backImageStream = createReadStream(backImageFile);

    replaceBackground(frontImageStream, backImageStream, color, threshold)
    .then(readableStream => readableStream.pipe(res));
};