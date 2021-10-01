const imageStore = require('../services/ImageStore');
const uploadImageService = require('./../services/uploadImageService');

module.exports = [
    uploadImageService.single('uploaded_file'),
    (req, res) => {
        const file  = req.file;
        console.log(file);
        console.log(file.buffer);
        imageStore.insert(file.filename, file.size, file.buffer, (new Date).getTime(), file.mimetype);
        res.sendStatus(200);
    }
];