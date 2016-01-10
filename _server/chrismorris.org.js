var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))

var port = process.argv[2]

if (!port) {
  port = 3000
}
console.log('Using port ' + port)

app.post('/views', function (req, res) {
  var url = (req.body.slug).replace(/^\/|\/$/g, '') // Strip leading and trailing slashes
  var mysql = require('mysql')
  var mysqlConfig = require('./mysql-config')
  var connection = mysql.createConnection(mysqlConfig.db)

  connection.connect()

  // Get view count and send it
  connection.query('SELECT views FROM views WHERE url = ?', [url], function (err, results) {
    if (err) {
      console.error(err.message)
      res.send({ err: 'Error: db error while getting view count' })
    } else if (results.length === 0) {
      res.send({ err: 'Error: url not found' })
    } else {
      res.send(results[0])
    }

    // Asyncronously update the view count
    connection.query(
      'UPDATE views SET views=views+1 WHERE url = ?', [url],
      function (err, results) {
        if (err) {
          console.error(err.message)
          connection.end()
        } else if (results.affectedRows === 0) {
          // If no rows were affected, then this is a new post, so add it
          connection.query(
            'INSERT INTO views (url, views) VALUES (?, ?)', [url, 1],
            function (err, results) {
              if (err) {
                console.error(err.message)
              } else if (results.affectedRows !== 1) {
                console.error('ERROR: Inserting new url failed')
              } else {
                console.error('Added new url ' + url)
              }
              connection.end()
            })
        } else {
          connection.end()
        }
      })
  })
})
app.listen(port)
