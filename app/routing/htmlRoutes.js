var path = require("path");

module.exports = function(app){

	app.use('/survey', function (req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get('*', function (req, res) {
	  	res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};