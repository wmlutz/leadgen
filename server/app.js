"use strict";

let express = require('express');
let app = express();

let mongoUtil = require('./mongoUtil.js');
mongoUtil.connect();

app.use( express.static(__dirname +"/../client"));

app.get("/leads", function(resquest, response){
  let leads = mongoUtil.leads();
  leads.find({}).toArray(function (err, docs) {
    console.log(JSON.stringify(docs));
    let firstNames = docs.map((lead) => lead.fname);
    response.json(firstNames);
  });
});

app.listen(8181, function(){
  console.log("Listening on 8181");
});
