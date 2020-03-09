/*
Node Server hosted on Heroku
by Eric Sheffield, Nick Hwang, and Anthony T. Marasco (2020)
*/

const express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server); 



// launch the server
server.listen(process.env.PORT || 80); // start listening for socket connections




io.on('connection', (socket) => {
    
    // --- intial connection messages

    // post new connection message to server console
    console.log('A client has connected.');

    // send a confirmation message to a new client when they have connected
    socket.emit('messageFromServer', "Welcome from the server!"); 

    // let the other clients know about the new particpant
    socket.broadcast.emit('messageFromServer', "Someone else has joined!");
    

    // ---


    // --- client to client communications

    // chat messages
    socket.on('chatToServer', (chat) => {
        socket.broadcast.emit('chatFromServer', chat);
    })

    // data
    socket.on('dataToServer', (data) => {
        socket.broadcast.emit('dataFromServer', data);
    })

});