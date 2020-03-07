const maxAPI = require('max-api'),
    io = require('socket.io-client'),
    // In this line, the address and port must match that of the server.
    // 127.0.0.1 is the default for server's located on your own machine, but you can edit this line to point elsewhere.
    socket = io.connect('http://127.0.0.1:80');

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
