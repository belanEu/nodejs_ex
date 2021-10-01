const imageStore = require('../services/ImageStore');
const uploadImageService = require('./../services/uploadImageService');

module.exports = [
    uploadImageService.single('uploaded_file'),
    (req, res) => {
        try {
            const file  = req.file;
            imageStore.insert(file.filename, file.size, file.buffer, (new Date).getTime(), file.mimetype);
            res.sendStatus(200);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }
];