"use strict";

let express = require('express');
let app = express();

let mongoUtil = require('./mongoUtil.js');
mongoUtil.connect();

app.use(express.static(__dirname + "/../client"));

let bodyParser = require('body-parser');
let jsonParser = bodyParser.json;

// NEED TO HANDLE ERRORS BETTER
app.get("/leads", function(resquest, response) {
	let leads = mongoUtil.leads();
	leads.find({}).toArray(function(err, docs) {
		// console.log(JSON.stringify(docs));
		if (err) {
			response.sendStatus(400);
		}
		let firstNames = docs.map((lead) => lead.fname);
		response.json(firstNames);
	});
});

app.get("/campaigns", function(resquest, response) {
	let campaigns = mongoUtil.campaigns();
	campaigns.find({}).toArray(function(err, docs) {
		// console.log(JSON.stringify(docs));
		if (err) {
			response.sendStatus(400);
		}
		let campID = docs.map((campaign) => campaign._id);
		response.json(campID);
	});
});

app.post("/login", jsonParser, function(request, response) {
  let newUser = request.body.user;

  console.log("User info: ", newUser);

  response.sendStatus(201);
});

app.listen(8181, function() {
	console.log("Listening on 8181");
});
