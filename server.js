// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Requires for extra Route pages, which took me forever to figure out
//what the instructions we asking for since we did not do it this was
//in any of our classes.  Sorry Phillip is this is 'unprofessional'
// =============================================================

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



//Lets listen to this mess shall we?
//==============================================================

app.listen(PORT, function() {
	console.log("Listening on PORT: " + PORT);
})

