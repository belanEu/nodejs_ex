const imageStore = require('../services/ImageStore');
const uploadImageService = require('./../services/uploadImageService');
const checkFileFormat = require('../middleware/checkFileFormat');

module.exports = [
    uploadImageService.single('uploaded_file'),
    checkFileFormat,
    (req, res) => {
        try {
            const file  = req.file;
            imageStore.insert(file.filename, file.size, (new Date).getTime(), file.mimetype);
            res.sendStatus(200);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }
];