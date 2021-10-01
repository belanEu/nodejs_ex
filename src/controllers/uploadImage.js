const imageStore = require('../services/ImageStore');

module.exports = (req, res) => {
    try {
        const file  = req.file;
        if (!file) {
            return res.sendStatus(400);
        }
        const id = imageStore.insert(file.filename, file.size, (new Date).getTime(), file.mimetype);
        res.json({"id": id});
    } catch (err) {
        res.sendStatus(400);
    }
};