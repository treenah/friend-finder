var express = require("express");
var bodyParser = require("body-parser");

// ==============================Set up the Express App========================================

var app = express(__dirname + "/home.html");
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ==============================Require routing========================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =========================Starts the server to begin listening================================

app.listen(PORT, function() {
  console.log("howdy, pa'nah'! " + PORT);
});
