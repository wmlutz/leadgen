"use strict";

let express = require('express');
let app = express();

let mongoUtil = require('./mongoUtil.js');
mongoUtil.connect();

app.use(express.static(__dirname +"/../client"));

// NEED TO HANDLE ERRORS BETTER
app.get("/leads", function(resquest, response){
  let leads = mongoUtil.leads();
  leads.find({}).toArray(function (err, docs) {
    // console.log(JSON.stringify(docs));
    if(err) {
      response.sendStatus(400);
    }
    let firstNames = docs.map((lead) => lead.fname);
    response.json(firstNames);
  });
});

app.get("/campaigns", function(resquest, response){
  let campaigns = mongoUtil.campaigns();
  campaigns.find({}).toArray(function (err, docs) {
    // console.log(JSON.stringify(docs));
    if(err) {
      response.sendStatus(400);
    }
    let campID = docs.map((campaign) => campaign._id);
    response.json(campID);
  });
});

app.listen(8181, function(){
  console.log("Listening on 8181");
});
