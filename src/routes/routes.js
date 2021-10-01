const express = require('express');
const router = new express.Router();

const controller = require('../controllers/controllers');
const uploadImageService = require('../services/uploadImageService');
const checkImageExistence = require('../middleware/checkImageExistence');
const checkValidImages = require('../middleware/checkValidImages');

router.get('/list', controller.getListOfImages);
router.get('/image/:id', checkImageExistence, controller.downloadImageById);
// // /merge?front=<id>&back=<id>&color=145,54,32&threshold=5 
router.get('/merge', checkValidImages, controller.mergeImages);

router.post('/upload', uploadImageService.single('uploaded_file'), controller.uploadImage);

router.delete('/image/:id', checkImageExistence, controller.deleteImageById);

module.exports = router;
