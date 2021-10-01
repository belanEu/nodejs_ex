const uploadImage = require('./uploadImage');
const deleteImageById = require('./deleteImageById');
const getListOfImages = require('./getListOfImages');
const downloadImageById = require('./downloadImageById');
const mergeImages = require('./mergeImages');

module.exports = {
    getListOfImages,
    downloadImageById,
    mergeImages,
    uploadImage,
    deleteImageById
};