const express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(process.env.PORT);

console.log("Server listening at ${PORT}")

io.on('connection', (socket) => {
    
    // --- intial connection messages 
    
    // send a message when a new connection is made to all of the clients EXCEPT for the new particpant
    socket.broadcast.emit('message', "other player has joined");
    
    // send a message to only a new client when they have connected
    socket.emit('message', "welcome"); 

    // ---



    // --- player to player communications

    // chat messages
    socket.on('chat', (chat) => {
        socket.broadcast.emit('chat', chat);
    })
    
});