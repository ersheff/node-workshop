// Eric Sheffield 2019
// CC-BY-4.0

const maxAPI = require('max-api');
const io = require('socket.io-client')

var socket = io.connect('http://127.0.0.1:3000');

// report connection status
socket.on('connect', () => {
    maxAPI.outlet('connected');
});



// --- incoming from patch

// messages to inlet with 'chat' flag
maxAPI.addHandler('chat', (chat) => {
    socket.emit('chat', chat);
});




// --- incoming from server

// when client recieves a generic status message from server, print to console
socket.on('message', (message) => {
    maxAPI.outlet(message);
});
