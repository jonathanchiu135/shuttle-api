const { resolveSoa } = require("dns");
const express = require("express");

const app = express();

app.post("/", function(req, res) {
    res.send("Post Request");
})




//COPY-PASTE INTERNET CODE!!!!
const http = require('http');
var data = '';
http.get('http://andysbuses.com/Services/JSONPRelay.svc/GetMapVehiclePoints?ApiKey=8882812681', (resp) => {

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  information = data;

  // The whole response has been received. Print out the result in the console.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});



//WHEN YOU OPEN UP THE LOCALHOST 5000 PAGE 
app.get("/", function(req, res) {   
    res.send(JSON.parse(data));
})



app.listen(5000, () => console.log('App listening on port 5000.'));

/*
GET, POST requests 
GET: send the server a get request 

*/