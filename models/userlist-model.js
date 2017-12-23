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
			console.log(result);
			callback(result[0]);
		});
	},
	// delete: function(catid, callback){
	// 	var sql = "DELETE FROM categories WHERE id =?";
	// 	db.executeGetId(sql, [catid], function(flag){
	// 		callback(flag);
	// 	});
	// },
	// insert: function(category, callback){
	// 	var sql = "INSERT INTO categories(name,description) VALUES (?, ?)";
	// 	db.executeGetId(sql, [category.name, category.description], function(id){
	// 		if(id <= 0)
	// 		{
	// 			callback(false);
	// 		}
	// 		else
	// 		{
	// 			callback(true);
	// 		}
	// 	});
	// },
	update: function(user, callback){
		var sql = "UPDATE users SET type=? WHERE userId=?";
		db.execute(sql, [user.type, user.userId], function(flag){
			callback(flag);
			console.log('userlist-model',flag);
		});
	}
};