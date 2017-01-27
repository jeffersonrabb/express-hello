var express = require('express')
var app = express()

app.get('/', function(req, res) {
	res.send('Did I finally figure this out?????????')
})

app.listen(8080, function() {
	console.log('We are listening on port 8080')
})
