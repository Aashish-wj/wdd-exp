const express = require("express");
const app = express();
app.get('/login', function(req,res){
    res.send("Logged User")
})

app.get('/login/ram', function(req,res){
    res.send("Welcome Ram")
})

app.get('/login/:name', function(req,res){
    var name=req.params.name
    res.send("Welcome "+ name)
})

app.get('/', function (req, res) {                     
	res.sendFile(__dirname + "/index.html");
});

app.get('/process_get', function (req, res) {        
var response = { fname: req.query.a,   lname: req.query.b }; 
	console.log(response);
	res.json(response);
});

const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('myEvent', (data) => {
    console.log(`myEvent was triggered with data: ${data}`);
  });
  
  myEmitter.emit('myEvent', 'Hello, World!');

app.listen(3000, function(req,res){
console.log("Server running in http:localhost:3000")
})
