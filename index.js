var express = require('express')
var app = express()

app.get('/', function(req, res) {
	res.send('DB Running Too!')
})

app.listen(8080, function() {
	console.log('We are listening on port 8080')
})
