module.exports = {

	init: function(app) {

		//the main server
		app.get('/', function(req, res){
			res.send('index.html');
		});

		//redirect all unknown endpoints
		app.get('/*', function(req, res){
			res.redirect('/');
		});
	}
}