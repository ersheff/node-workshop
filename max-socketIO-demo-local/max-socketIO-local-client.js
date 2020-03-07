// Eric Sheffield 2019
// CC-BY-4.0

const maxAPI = require('max-api'),
    io = require('socket.io-client'),
    socket = io.connect('http://10.24.1.16:3000');

// report connection status
socket.on('connect', () => {
    maxAPI.outlet("Connected to server.");
});



// --- incoming from patch, out to server

// chat messages to other clients
maxAPI.addHandler('chat', (chat) => {
    socket.emit('chatToServer', chat);
});

// data to other clients
maxAPI.addHandler('data', (data) => {
    socket.emit('dataToServer', data);
});



// --- incoming from server

socket.on('messageFromServer', (message) => {
    maxAPI.outlet('message', message);
});

socket.on('chatFromServer', (chat) => {
    maxAPI.outlet('chat', chat);
});

socket.on('dataFromServer', (data) => {
    maxAPI.outlet('data', data);

});
