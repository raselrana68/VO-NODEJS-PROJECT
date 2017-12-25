var express = require('express');
var router = express.Router();
var registerModel= require.main.require('./models/register-model');


router.get('/', function(request, response, next){
	response.render('register');
});

router.post('/', function(request, response){
	var user = {
		fullname: request.body.fullname,
		email: request.body.email,
		username: request.body.username,
		password: request.body.password,
		conpassword: request.body.conpassword
	};

	registerModel.insert(user, function(success){
		if(success)
		{
			request.flash('info',"user Added Successfully");
			response.redirect('/login');
		}
		else
		{
			response.send('Error inserting data');
		}
	});
	
});

module.exports = router;
