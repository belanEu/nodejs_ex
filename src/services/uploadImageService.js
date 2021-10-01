const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../files/images/'));
    }
});

const fileFilter = (req, file, cb) => {
    if (['image/jpg', 'image/jpeg', 'image/png'].indexOf(file.mimetype) !== -1) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

module.exports = multer({ storage: storage, fileFilter: fileFilter });