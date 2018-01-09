//var loverInfo = require("../data/friends.js");
var path = require("path"),
	express = require('express'),
	loverInfo = require("../data/friends.js");


//Routes for the APIs
//this may get messy....
//======================================================

module.exports = function(app){
	app.get("/api/loverInfo", function(req, res){
		res.json(loverInfo);
	})

	app.post("/api/loverInfo", function(req, res){
		//var newLoverObj = req.body;

		var newLover = req.body;

		//This is to make sure I am getting the new object
		console.log("-------------------------------------");
		console.log("The New Lover is:");
		console.log(newLover);
		console.log("-------------------------------------");
	
		var nlScores = newLover.scores;
		var totalDifferenceArr = [];

		//This is where I am having the biggest issue.  It says that anything connected to scores is undefiner,
		//so any of my loops to make the comparison does not work.  I am at an utter loss.  The below console.logs
		//are my attempts to figure this out.  When i console.log the entire object, scores looks like this:
		// 'scores[]': [2,5,3,4,1,2,3,1,4,1] or whatever the values don't matter, but why is scores itsel a string?
		//is that the issue? I've spent way to much time of this and I can't figure it out
		console.log("-------------------------------------");
		console.log(nlScores);
		console.log("-------------------------------------");

		for(i = 0; i < loverInfo.length; i++){
			var diffBetweenLovers = 0;

			for(x=0; x < nlScores.length; x++){
				var qDiff = Math.abs(parseInt(nlScores[x]) - parseInt(loverInfo[i].scores[x]));
				diffBetweenLovers += qDiff;
			}
			totalDifferenceArr.push(diffBetweenLovers);
		}
		var loverMatchI = totalDifferenceArr.indexOf(Math.min.apply(null, totalDifferenceArr));

		var loverMatch = {
			name: loverInfo[loverMatchI].name,
			photo: loverInfo[loverMatchI].photo
		}

		loverInfo.push(newLover);

		console.log(loverMatch);

		res.json(loverMatch);
	})

};