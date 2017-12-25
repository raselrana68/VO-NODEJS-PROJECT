var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

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

router.get('/', function(request, response){
	var username=request.session.loggedUsername;
	userModel.get(username, function(result){
		request.session.loggedUserId=result;
	response.render('user/home',{username:username});
	});
});

router.get('/profile', function(request, response){
	var userId=request.session.loggedUserId;
	userModel.getAll(userId,function(result){
				var data = {
				            user: result
			               };
	response.render('user/profile', data);
	});
	
   });
router.get('/edit/:id', function(request, response){
	var userId=request.params.id;
	userModel.getEdit(userId,function(result){
				var data = {
				            user: result
			               };
	response.render('user/edit', data);
	});
	
   });
router.post('/edit/:id', function(request, response){
	var data = {
		userId: request.body.userId,
		fullname: request.body.fullname,
		email: request.body.email
	};

	userModel.update(data, function(success){
		if(success)
		{   request.flash('info',"Updated Successfully");
			response.redirect('/userHome/profile');
		}
		else
		{
			response.send('Error inserting data');
		}
	});
	
});

module.exports = router;
