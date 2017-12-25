var express = require('express');
var router = express.Router();
var loginModel = require.main.require('./models/login-model');


router.get('/', function(request, response){
	response.render('login');
});

router.post('/', function(request, response){
	
	var user = {
		username: request.body.username,
		password: request.body.password
	};

	loginModel.validate(user, function(result){
		if(result)
			{
				if(result.type=='Admin')
					{
						request.session.loggedUsername = request.body.username;
						response.redirect('/adminHome');
					}
				else
					{request.session.loggedUsername = request.body.username;
					response.redirect('/userHome');
					}
			}
		else
				{
					response.redirect('/login');
				}
	});
});

module.exports = router;
