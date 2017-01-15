"use strict";

let express = require('express');
let app = express();

let mongoUtil = require('./mongoUtil');
mongoUtil.connect();

app.use(express.static(__dirname + "/../client"));

let bodyParser = require("body-parser");
let jsonParser = bodyParser.json();

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

app.post("/leads", (request, response) => {
	let newLeadList = request.body || {};
	let leads = mongoUtil.leads();

	if (newLeadList) {
			console.log("Made it to server side", newLeadList);
			response.sendStatus(400);
		}
		console.log("Didn't make it to server side.")
		response.sendStatus(201);
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

app.get("/users", function(resquest, response) {
	let users = mongoUtil.users();
	users.find({}).toArray(function(err, docs) {
		// console.log(JSON.stringify(docs));
		if (err) {
			response.sendStatus(400);
		}
		let userID = docs.map((user) => user._id);
		response.json(userID);
	});
});

app.post("/users", jsonParser, (request, response) => {
	let newUser = request.body || {};
	let users = mongoUtil.users();

	//console.log("server app: ", newUser);
	// error check that user has all fields
	// if (!newUser._id || !newUser.fname ....)
	// {response.sendstatus(400)}

	users.insertOne(newUser, (err, res) => {
		if (err) {
			response.sendStatus(400);
		}
		response.sendStatus(201);
	});
});

app.listen(8181, function() {
	console.log("Listening on 8181");
});
