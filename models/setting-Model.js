var db = require('./db');

module.exports = {

	update: function(user, callback){
		var sql = "UPDATE users SET password=? WHERE username=?";
		db.execute(sql, [user.newPassword,user.username], function(flag){
			callback(flag);
		});
	}
};