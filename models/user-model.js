var db = require('./db');

module.exports = {
	get: function(un, callback){
		var sql = "SELECT userId FROM users WHERE username=? ";
		db.getResult(sql, [un], function(result){
			callback(result[0]);
		});
	},
	getAll: function(userId, callback){
		var sql = "SELECT * FROM users JOIN profiles ON users.userId = profiles.userId  WHERE users.userId=?";
		db.getResult(sql, [userId.userId], function(result){ 
			callback(result[0]);
		});
	},

	getEdit: function(user, callback){
		var sql = "SELECT * FROM profiles WHERE userId=?";
		db.getResult(sql, [user], function(result){ 
			callback(result[0]);
		});
	},

	update: function(user, callback){
		var sql = "UPDATE profiles SET fullname=?, email=? WHERE userId=?";
		db.execute(sql, [user.fullname, user.email, user.userId], function(flag){
			callback(flag);
		});
	},
};