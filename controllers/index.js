var express = require('express');
var router = express.Router();
// var userModel = require.main.require('./models/user-model');

router.get('/', function(request, response){
	response.render('index');
});

module.exports = router;
