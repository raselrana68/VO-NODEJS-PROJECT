var db = require('./db');

module.exports = {
	check: function(user, callback){
		var sql = "SELECT password FROM users WHERE username=?";
		db.getResult(sql, [user.username], function(result){
			callback(result[0]);
		});
	},

	// update: function(user, callback){
	// 	var sql = "UPDATE users SET password=? WHERE username=? and password=?";
	// 	db.execute(sql, [user.newPassword,user.username,user.oldPassword], function(flag){
	// 		callback(flag);
	// 	});
	// }
};