// http://beardscript.com/networking/socket-io-authoritative-server-for-unity/

// https://socket.io/get-started/chat/
// https://github.com/socketio/socket.io/blob/master/examples/chat/public/main.js
// https://github.com/socketio/socket.io
// https://stackoverflow.com/questions/10342681/whats-the-difference-between-io-sockets-emit-and-broadcast

// server setup
const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 80;

// Routing
app.use(express.static(path.join(__dirname, 'public')));

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// "Listens" for client connections
io.sockets.on('connection', function(socket) {
  users++;
  // print in server console the socket's id
  console.log('New user connected: ' + socket.id);
  // print the number of users
  console.log('Users connected: ' + users);
  // emits connection established event (from server back to client)
  socket.emit('connectionEstabilished-max', {
    id: socket.id
  });
  // broadcasts connection established event to all clients
  socket.broadcast.emit('connectionEstabilishedGlobal', {
    id: socket.id
  });

  socket.on('inc', function(data) {
    socket.broadcast.emit('inc', data);
    console.log("received increase event...");
  });

  socket.on('dec', function(data) {
    socket.broadcast.emit('dec', data);
    console.log("received increase event...");
  });

  socket.on('spawnCollectible', function(){
    socket.broadcast.emit('spawnCollectible');
    console.log("spawning new collectible");
  });

  socket.on('increaseTempo', function(data) {
    socket.broadcast.emit('increaseTempo', data);
    console.log("received tempo change: increase...");
  });

  socket.on('decreaseTempo', function(data) {
    socket.broadcast.emit('decreaseTempo', data);
    console.log("received tempo change: decrease...");
  });



  // remove user
  socket.on('disconnect', function() {
    users--;
    console.log('A user disconnected - ' + socket.id);
  });
});



http.listen(PORT, () => console.log(`Listening on ${ PORT }`))
