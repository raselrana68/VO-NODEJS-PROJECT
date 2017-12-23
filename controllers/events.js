var express = require('express');
var router = express.Router();
var eventsModel = require.main.require('./models/events-model');

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
	eventsModel.getAll(function(result){
		var data = {
			eventlist: result
		};
		response.render('admin/eventlist', data);
	});
	
});

router.get('/create', function(request, response){
	response.render('admin/createEvent');
	
});

router.post('/create', function(request, response){
	var event= {
		eventname: request.body.eventname,
		eventdate: request.body.eventdate,
		venue: request.body.venue,
		eventdetails: request.body.eventdetails,
		hostadmin: request.session.loggedUsername,
		status:'Pending'

	};
	
	eventsModel.insert(event, function(success){
		if(success)
		{
			request.flash('info',"Events Created Successfully");
			response.redirect('/events');
		}
		else
		{
			response.send('Error inserting data');
		}
	});
	
});


router.get('/delete/:id', function(request, response){
	var eventId = request.params.id;
	eventsModel.delete(eventId, function(event){
		response.redirect('/events');
	});
	
});

router.get('/edit/:id', function(request, response){
	
	var eventId = request.params.id;
	eventsModel.get(eventId, function(event){
		response.render('admin/eventedit', event);
	});
	
});


router.post('/edit/:id', function(request, response){
	var event = {
		eventId: request.body.eventId,
		eventname: request.body.eventname,
		eventdate: request.body.eventdate,
		venue: request.body.venue,
		eventdetails: request.body.eventdetails,
		status: request.body.status
	};
	eventsModel.update(event, function(success){
		if(success)
		{	request.flash('info',"Updated Successfully");
			response.redirect('/events');
		}
		else
		{
			response.send('Error inserting data');
		}
	});
	
});


module.exports = router;
