var Check = require('../models/check');

exports.check_detail = function(req, res, next) {
	//    res.send('NOT IMPLEMENTED: Check detail: ' + req.params.id);

	res.render('check', { title: 'Hey', message: `Hello there! ${req.params.checkId} ` });
	// next();
};
