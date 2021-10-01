const imageStore = require('../services/ImageStore');

module.exports = (req, res, next) => {
    const id = req.params.id; 
    const image = imageStore.findOne(id);

    if (image) {
        next(req, res);
    } else {
        res.status(404).send('Картинка не найдена :(');
    }
};