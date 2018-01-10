var express = require('express');
var router = express.Router();

var getCitiesFromWSDL = require('../jsLib/soapCity');

// router for inputing country
router.get('/soap/:country', function(req, res, next) {

	var country = req.params.country;

	getCitiesFromWSDL(res, country)
	.then(function(result){

	})
});



module.exports = router;
