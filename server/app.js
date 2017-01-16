"use strict";

let express = require('express');
let app = express();
let mongoUtil = require('./mongoUtil');
let multer = require('multer');
let upload = multer({
	dest: './uploads/'
});
let fs = require('fs');

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

// server takes leads file and manages it
app.post("/leads", upload.single('files'), function(req, res) {
	console.log('Starting Server post module');
	var tmp_path = req.file.path;
	var target_path = 'uploads/' + req.file.originalname;
	console.log('this is the path and tmp path', target_path, tmp_path);

	var src = fs.createReadStream(tmp_path);
	var dest = fs.createWriteStream(target_path);
	src.pipe(dest);
	src.on('end', function() {
		// res.render('complete');
		res.sendStatus(201);
	});
	src.on('error', function(err) {
		// res.render('error');
		res.sendStatus(400);
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
