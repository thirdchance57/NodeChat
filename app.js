var http    = require ('http');
var express = require ('express');

var app     = express();


// this line hooks up express and server
var server  = http.Server(app);

//bring in socket io to and have it listen to server
var io  = require ('socket.io')(server);


////////////// ROUTING ///////////////
app.get('/', function(request,response){
  console.log (__dirname);
  response.sendFile(__dirname + '/index.html');
});


///////////////// SOCKET.IO /////////////
io.on('connection', function(handler) {
  console.log("socketconnected");

  handler.on('message', function(m) {
    console.log('message: ' + m);
    console.log('client is connect to server');

    io.emit('chat', m);

  });
});

server.listen(3000);
console.log("server is running");






// BLOW DOES WHAT EXPRESS() DOES
// var server = http.createServer(function(request, response){
//   response.end(JSON.stringify({name: "bill"}));
// });

// server.listen(9000);
