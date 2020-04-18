var express = require('express');
var router = express.Router();
var checkController = require('../controllers/checkController');

// router.get('/ca?h*eck/:checkId', function(req, res, next) {
// 	res.render('check', { title: 'Hey', message: 'Hello there!' });
// 	next();
// });

router.get('/ca?h*eck/:checkId', checkController.check_detail);

module.exports = router;
