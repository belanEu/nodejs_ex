const express = require('express');
const router = new express.Router();

const controller = require('../controllers/controllers');
const checkImageExistence = require('../middleware/checkImageExistence');
const checkFileFormat = require('../middleware/checkFileFormat');

// router.get('/list', controller.getLsitOfImages());
// router.get('/image/:id', controller.downloadImageById());
// // /merge?front=<id>&back=<id>&color=145,54,32&threshold=5 
// router.get('/merge', controller.mergeImages());

router.post('/upload', checkFileFormat, controller.uploadImage);

router.delete('/image/:id', checkImageExistence, controller.deleteImageById);

module.exports = router;
