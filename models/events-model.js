var db = require('./db');

module.exports = {
	getAll: function(callback){
		var sql = "SELECT * FROM events";
		db.getResult(sql, null, function(result){
			callback(result);
		});
	},
	get: function(eventId, callback){
		var sql = "SELECT * FROM events WHERE eventId=?";
		db.getResult(sql, [eventId], function(result){
			callback(result[0]);
		});
	},
	delete: function(eventId, callback){
		var sql = "DELETE FROM events WHERE eventId =?";
		db.executeGetId(sql, [eventId], function(flag){
			callback(flag);
		});
	},
	insert: function(event, callback){
		var sql = "INSERT INTO events(eventname,eventdetails,hostadmin,venue,status,eventdate) VALUES (?, ?, ?, ?, ?, ?)";
		db.executeGetId(sql, [event.eventname, event.eventdetails, event.hostadmin, event.venue, event.status, event.eventdate], function(id){
			if(id <= 0)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}
		});
	},
	update: function(event, callback){
			console.log(event);
		var sql = "UPDATE events SET eventname=?, eventdate=?, venue=?, eventdetails=?, status=? WHERE eventId=?";
		console.log(sql);
		db.execute(sql, [event.eventname,event.eventdate,event.venue,event.eventdetails,event.status,event.eventId], function(flag){
			callback(flag);
		});
	}
};