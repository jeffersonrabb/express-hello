var express = require('express')
var app = express()

app.get('/', function(req, res) {
	res.send('DB Running Too! TRYING PORT 8443. Looking terrible!!')
})

app.listen(8443, function() {
	console.log('We are listening on port 8443')
})
