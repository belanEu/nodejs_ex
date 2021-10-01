const imageStore = require('../services/ImageStore');

module.exports = (req, res) => {
    try {
        const file  = req.file;
        if (!file) {
            res.status(400).send('Неверный формат загружаемого файла. Доступны: jpg, jpeg, png');
        }
        console.log('successfully uploaded File. Yes!');
        imageStore.insert(file.filename, file.size, (new Date).getTime(), file.mimetype);
        res.sendStatus(200);
    } catch (err) {
        res.status(400).send(err.message);
    }
};