var express 			= require('express');
var app 				= express();
var bodyParser 			= require('body-parser');
var cookieParser 		= require('cookie-parser');
var session 			= require('cookie-session');
var creds				= require('./credentials.js');
var sys                 = require('./settings.js');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/assets'));


// configure session
app.use(session({ 
	secret: creds.SESSION_SECRET,
	name: 'session',
	resave: true,
	saveUninitialized: true
}));

// import local modules for routes / all other functionality
var routes = require('./routes.js').init(app);

// start server
var server = app.listen(sys.PORT, function() {
	console.log('UptownID server listening on port %d', server.address().port);
});