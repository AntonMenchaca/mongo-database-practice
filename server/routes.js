const router = require('express').Router();
//use this page to handle routes!
const controllers = require('./controllers');

router.get('/save', controllers.savePoster);

module.exports = router;