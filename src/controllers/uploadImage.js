const imageStore = require('../services/ImageStore');

module.exports = (req, res) => {
    try {
        const file  = req.file;
        if (!file) {
            return res.sendStatus(400);
        }
        imageStore.insert(file.filename, file.size, (new Date).getTime(), file.mimetype);
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(400);
    }
};