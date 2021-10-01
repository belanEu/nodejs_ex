module.exports = (req, res, next) => {
    console.log(req);
    if (['image/jpg', 'image/jpeg', 'image/png'].indexOf(req.file.mimetype) !== -1) {
        next(req, res);
    } else {
        res.status(400).send('Неверный формат загружаемого файла. Доступны: jpg, jpeg, png');
    }
};