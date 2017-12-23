var db = require('./db');

module.exports = {
	getAll: function(callback){
		var sql = "SELECT * FROM users JOIN profiles ON users.userId = profiles.userId";
		db.getResult(sql, null, function(result){
			callback(result);
		});
	},
	get: function(userId, callback){
		var sql = "SELECT * FROM users WHERE userId=?";
		db.getResult(sql, [userId], function(result){
			callback(result[0]);
		});
	},
	delete: function(userId, callback){
		var sql = "DELETE FROM users WHERE userId =?";
		db.executeGetId(sql, [userId], function(flag){
			callback(flag);
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO users(username,password) VALUES (?, ?)";
		db.executeGetId(sql, [user.username, user.username,user.fullname], function(id){
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
	update: function(user, callback){
		var sql = "UPDATE users SET type=? WHERE userId=?";
		db.execute(sql, [user.type, user.userId], function(flag){
			callback(flag);
		});
	}
};