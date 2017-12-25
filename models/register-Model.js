var db = require('./db');

module.exports = {
	validate: function(catid, callback){
		var sql = "SELECT * FROM categories WHERE id=?";
		db.getResult(sql, [catid], function(result){
			callback(result[0]);
		});
	},

	insert: function(user, callback){
		console.log('Insert',user);
		var sql = "INSERT INTO users (username,password,type) VALUES (?, ?, 'User')";
		db.execute(sql, [user.username, user.password], function(flag){
			if(flag)
				{
				 var sql = "INSERT INTO profiles (fullname,email) VALUES (?, ?)";
			     db.execute(sql, [user.fullname, user.email], function(flag){
				 if(flag){
						callback(true);
                    }
                 else
                 	{
                        callback(false);
                    }
				 });
				}
			else
			{
				callback(false);
			}
		});
	},

	insert1:function(data,callback){
        
        var sql="";
        var status = "unread";
         
        sql = "INSERT INTO notifications(advertiseId,SenderEmail,ReciverEmail,status,created_at) VALUES(?,?,?,?,?)";
         
        db.execute(sql, [data.AdvertiseId, data.SenderEmail, data.RecevierEmail, status, data.created_at],function(flag){
            if(flag){
                status = "pending";

                sql = "INSERT INTO request_tracks(AdvertiseId,SenderEmail,RecevierEmail,Status,created_at) VALUES(?,?,?,?,?)";
                db.execute(sql, [data.AdvertiseId, data.SenderEmail, data.RecevierEmail, status, data.created_at],function(flag){
                    if(flag){

                         
                        callback(true);
                    }else{
                        callback(false);
                    }
                });
            }else{
                callback(false);
            }
        });
    },
	
};