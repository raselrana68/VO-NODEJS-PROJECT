var express = require('express');
var router = express.Router();
var userlistModel = require.main.require('./models/userlist-model');

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
	userlistModel.getAll(function(result){
		var data = {
			userlist: result
		};
		response.render('admin/userlist', data);
	});
	
});

router.get('/create', function(request, response){
	response.render('admin/addvolunteer');
	
});

router.post('/create', function(request, response){
	var user = {
		fullname: request.body.fullname,
		username: request.body.username,
		email: request.body.email
	};
	
	userlistModel.insert(user, function(success){
		if(success)
		{
			request.flash('info',"User Added Successfully");
			response.redirect('/userlist');
		}
		else
		{
			response.send('Error inserting data');
		}
	});
	
});


router.get('/delete/:id', function(request, response){
	var userId = request.params.id;
	userlistModel.delete(userId, function(category){
		request.flash('info',"Deleted Successfully");
		response.redirect('/userlist');
	});
	
});

router.get('/edit/:id', function(request, response){
	var userId = request.params.id;
	userlistModel.get(userId, function(category){
		response.render('admin/edit', category);
	});
	
});

router.post('/edit/:id', function(request, response){
	var user = {
		userId: request.body.userId,
		type: request.body.type
	};
	userlistModel.update(user, function(success){
		if(success)
		{	request.flash('info',"User Type Upadated Successfully");
			response.redirect('/userlist');
		}
		else
		{
			response.send('Error Upadating data');
		}
	});
	
});



module.exports = router;
