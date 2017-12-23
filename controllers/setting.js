var express = require('express');
var router = express.Router();
var settingModel = require.main.require('./models/setting-model');

router.all('*', function(request, response, next){
	if(request.session.loggedUsername == null)
	{
		response.redirect('/login');
	}
	else
	{
		next();
	}
});

router.get('/update', function(request, response){
		response.render('admin/setting');
	});

router.post('/update', function(request, response){
	var user = {
		username: request.session.loggedUsername,
		oldPassword:  request.body.oldPassword,
		newPassword:request.body.newPassword,
		retypePassword:request.body.retypePassword
	};
	settingModel.update(user, function(success){
		if(success)
		{	request.flash('info'," Password Updated Successfully");
			response.redirect('/setting/update');
		}
		else
		{
			response.send('Error inserting data');
		}
	});
	
});



module.exports = router;
