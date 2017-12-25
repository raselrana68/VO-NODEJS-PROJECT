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
// router.get('/', function(request, response){
// 	userModel.getAll(function(result){
// 		var data = {
// 			catList: result
// 		};
// 		response.render('category/index', data);
// 	});
	
// });
// router.get('/', function(request, response){
// 	var username= request.session.loggedUsername
// 	console.log(username);
// 	userModel.get(function(username,result){
// 		var data = {
// 			userInfo: result
// 		};
// 	console.log(data);
// 		response.render('admin/home', data);
// 	});
	
// });

router.get('/', function(request, response){
	var username=request.session.loggedUsername;
	response.render('admin/home',{username:username});
});

module.exports = router;
