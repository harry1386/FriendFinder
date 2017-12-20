var loverInfo = require("../data/friends.js");
var path = require("path");

//Routes for the APIs
//this may get messy....
//======================================================

module.exports = function(app){
	app.get("/api/loverInfo", function(req, res){
		res.json(loverInfo);
	})

	app.post("/api/loverInfo", function(req, res){
		var newLover = req.body;
		console.log(newLover);
		loverInfo.push(newLover);
	})

	
};