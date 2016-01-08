var express	= require('express');
var bodyParser = require('body-parser');
var app	= express();

app.use(bodyParser.urlencoded({ extended: false }));

var port = process.argv[2]

if (!port) {
  port = 3000
}
console.log ('Using port ' + port)

app.post('/views', function(req, res){

  var slug		= (req.body.slug).replace(/^\/|\/$/g, ''); // Strip leading and trailing slashes
  var mysql		= require('mysql');
  var mysqlConfig = require('./mysql-config');
  var connection	= mysql.createConnection(mysqlConfig.db);

  connection.connect();

  // Return the number of views for a given URL
  connection.query('SELECT FORMAT(views+1, 0) AS views FROM views WHERE url = ?', [slug], function(err, rows, fields) {
    console.log("POST: View incremented on slug = '" + slug + "', views now = " + rows[0]['views']);

    res.setHeader('Content-Type', 'application/json');
    res.send(rows[0]);
  });

  // Update views
  connection.query('UPDATE views SET views = views+1 WHERE url = ?', [slug], function(err, rows, fields) {});

  // Close MySQL
  connection.end();

});


app.listen(port);
