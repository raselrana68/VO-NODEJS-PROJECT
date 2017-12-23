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

// router.get('/create', function(request, response){
// 	var title = "This is title";
// 	response.render('category/create',{title:title});
	
// });

// router.post('/create', function(request, response){
// 	var cat = {
// 		name: request.body.catname,
// 		description: request.body.desc
// 	};
	
// 	categoryModel.insert(cat, function(success){
// 		if(success)
// 		{
// 			request.flash('info',"Category Added Successfully");
// 			response.redirect('/category');
// 		}
// 		else
// 		{
// 			response.send('Error inserting data');
// 		}
// 	});
	
// });


// router.get('/delete/:id', function(request, response){
// 	var catid = request.params.id;
// 	console.log(catid);
// 	categoryModel.delete(catid, function(category){
// 		response.redirect('/category');
// 	});
	
// });

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

	console.log('userlist',user);
	
	userlistModel.update(user, function(success){
		if(success)
		{
			response.redirect('/userlist');
		}
		else
		{
			response.send('Error inserting data');
		}
	});
	
});



module.exports = router;
