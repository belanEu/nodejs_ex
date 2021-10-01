const imageStore = require('../services/ImageStore');

module.exports = (req, res) => {
    res.json(imageStore.getAll(['id', 'size', 'uploadedAt', 'mimeType']));
};