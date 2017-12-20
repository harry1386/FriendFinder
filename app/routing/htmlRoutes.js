var path = require("path");

module.exports = function(app){

//Routes
//So here we are connecting the html and making it viewable
//===========================================================

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/survery.html"));
	});



};