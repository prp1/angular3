"use strict";
console.log("Running webapp...");

var Express = require('express');
var app = new Express();
var port = process.env.PORT || 80;
app.use(require('body-parser').urlencoded());
app.use(require('body-parser').json());

app.use(Express.static('./app'));
app.get('/messages',function (req,res) {
	res.status(200).json(require('./messages.json'))
})
app.listen(port, function () {
	//console.log(`Running webhook listener...`);
	//console.log(`App listening on port ${port}`);
	console.log('App listening on port ' + port);
}) ;
