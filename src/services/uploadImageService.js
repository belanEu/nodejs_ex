const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../files/images/'));
    }
});

const fileFilter = (req, file, cb) => {
    if (['jpeg', 'jpg', 'png'].indexOf(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

module.exports = multer({ storage: storage, fileFilter: fileFilter });