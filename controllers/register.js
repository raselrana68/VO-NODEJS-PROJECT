var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
	console.log('Register Page LOAD');
	response.render('register');
});

module.exports = router;
