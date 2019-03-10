console.log('HTML Route Connected Successfully');


// Node Dependencies
var path = require('path');


// Includes Two Routes
function htmlRoutes(app) {

  // A GET Route to /survey which should display the survey page.
  app.get('survey.html', function (req, res) {
    res.sendFile(path.join(__dirname + 'survey.html'));
  });

  // A default USE route that leads to home.html which displays the home page.
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + 'home.html'));
  });

}

module.exports = htmlRoutes;