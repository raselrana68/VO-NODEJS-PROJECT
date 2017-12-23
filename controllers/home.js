var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(request, response, next){
	if(request.session.loggedUsername == null)
	{
		response.redirect('/login');
	}
	else
	{
		next();
	}
});

router.get('/', function(request, response){
	response.render('admin/home');
});


module.exports = router;
