const path = require('path');
const multer = require('multer');
const { uuid } = require('uuidv4');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../files/images/'));
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `image_${uuid()}${ext}`);
    }
});

const fileFilter = (req, file, cb) => {
    if (['image/jpg', 'image/jpeg', 'image/png'].includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

module.exports = multer({ storage: storage, fileFilter: fileFilter });