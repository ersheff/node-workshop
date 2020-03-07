const maxAPI = require('max-api'),
    io = require('socket.io-client'),
    // In this line, the address and port must match that of the server.
    // Instead of pointing to our localhost, we're going to point to the Heroku app
	//address
    socket = io.connect('https://moxsonicrulez.herokuapp.com');

// Report connection status to Max outlet.
socket.on('connect', () => {
    maxAPI.outlet("Connected to server.");
});



// --- Incoming from patch, out to server

// Chat messages to other clients
maxAPI.addHandler('chat', (chat) => {
    socket.emit('chatToServer', chat);
});

// Data to other clients
maxAPI.addHandler('data', (data) => {
    socket.emit('dataToServer', data);
});



// --- Incoming from server

socket.on('messageFromServer', (message) => {
    maxAPI.outlet('message', message);
});

socket.on('chatFromServer', (chat) => {
    maxAPI.outlet('chat', chat);
});

socket.on('dataFromServer', (data) => {
    maxAPI.outlet('data', data);

});
