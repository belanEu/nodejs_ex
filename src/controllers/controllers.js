const uploadImage = require('./uploadImage');
const deleteImageById = require('./deleteImageById');
const getListOfImages = require('./getListOfImages');

module.exports = {
    getListOfImages,
    // downloadImageById: (req, res) => {},
    // mergeImages: (req, res) => {},
    uploadImage,
    deleteImageById
};