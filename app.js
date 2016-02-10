'use strict'

var express = require('express');

var app = express();

app.use(express.static(__dirname + '/dist/src'));

app.listen(3000, function(){
	console.log("the server is on port 3000")
});