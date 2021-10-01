const uploadImage = require('./uploadImage');
const deleteImageById = require('./deleteImageById');
const getListOfImages = require('./getListOfImages');
const downloadImageById = require('./downloadImageById');

module.exports = {
    getListOfImages,
    downloadImageById,
    // mergeImages: (req, res) => {},
    uploadImage,
    deleteImageById
};