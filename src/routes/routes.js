const express = require('express');
const router = new express.Router();

const controller = require('../controllers/controllers');
const uploadImageService = require('../services/uploadImageService');
const checkImageExistence = require('../middleware/checkImageExistence');

// router.get('/list', controller.getLsitOfImages());
// router.get('/image/:id', controller.downloadImageById());
// // /merge?front=<id>&back=<id>&color=145,54,32&threshold=5 
// router.get('/merge', controller.mergeImages());

router.post('/upload', uploadImageService.single('uploaded_file'), controller.uploadImage);

router.delete('/image/:id', checkImageExistence, controller.deleteImageById);

module.exports = router;
