// DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var flash = require('express-flash');

var app = express();
app.use(flash());

var index = require('./controllers/index');
var login = require('./controllers/login');
var register = require('./controllers/register');
var logout = require('./controllers/logout');
var home = require('./controllers/home');
var userlist = require('./controllers/userlist');
var events = require('./controllers/events');
var setting = require('./controllers/setting');

var category = require('./controllers/category');

// CONFIGURATION
app.set('view engine', 'ejs');


// MIDDLEWARES
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret: 'my top secret password', saveUninitialized: true, resave: false}));

// ROUTES
app.use('/index', index);
app.use('/login', login);
app.use('/register', register);
app.use('/logout', logout);
app.use('/home', home);
app.use('/userlist', userlist);
app.use('/events', events);
app.use('/setting', setting);

app.use('/category', category);

app.get('/', function(req, res){
	res.redirect('/index');
});

// SERVER
app.listen(1337, function(){
	console.log('server started ...');
});