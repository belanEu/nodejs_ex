const express = require('express');
const router = new express.Router();

const controller = require('../controllers/controllers');

// router.get('/list', controller.getLsitOfImages());
// router.get('/image/:id', controller.downloadImageById());
// // /merge?front=<id>&back=<id>&color=145,54,32&threshold=5 
// router.get('/merge', controller.mergeImages());

router.post('/upload', controller.uploadImage);

router.delete('/image/:id', controller.deleteImageById);

module.exports = router;
