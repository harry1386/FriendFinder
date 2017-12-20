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

	/*app.post("/api/friendsList", function(req,res){
		var lowDiff = 50;
		var chosenLover;
		loverInfo.forEach(function(storedLovers){
			var diff = 0;
			for(i = 0; i < storedLovers.scores.length; i++){
				diff+=Math.abs(storedLovers.scores[i] - req.body.scores[i]);
			} if(diff<lowDiff){
				lowDiff = diff;
				chosenLover = storedLovers;
			}
		});

		res.json(chosenLover);
		loverInfo.push(req.body);
	});*/
};