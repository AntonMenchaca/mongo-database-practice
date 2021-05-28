const router = require('express').Router();
//use this page to handle routes!
const controllers = require('./controllers');
const helper = require('./helpers');

router.get('/save', controllers.savePoster);

router.get('/image',  controllers.getImage);

router.get('/text', controllers.getText);

module.exports = router;