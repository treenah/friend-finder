var path = require('path');

var path = require("path");

module.exports = function(app){

	app.use('/home', function (req, res) {
		res.sendFile(path.join(__dirname, "home.html"));
	});

	app.get('/survey', function (req, res) {
	  	res.sendFile(path.join(__dirname, "survey.html"));
	});
};