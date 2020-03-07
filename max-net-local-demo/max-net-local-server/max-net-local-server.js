// These first few lines import the http library and set up a very simple server.
const server = require('http').createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello');
});

// Here, we use the included os library to find out what our computer's host name is for convenience - this will be printed in the console when the server starts.
const hostname = require('os').hostname();

// Define your port here - this will need to be the same in your client script.
const port = 80;

// Launch the server.
server.listen(port, () => {
    console.log(`Server listening at ${hostname}.local on port ${port}.`);
});

// Start listening for client connections.
const io = require('socket.io').listen(server);


// From here down, we are defining how the server should respond to connections and I/O from the clients.
io.on('connection', (socket) => {
    
    // --- Intial connection messages

    // Report new connection message in the server console.
    console.log('A client has connected.');

    // Send a confirmation message to a new client when they have connected.
    socket.emit('messageFromServer', "Welcome from the server!"); 

    // Let the other clients know about the new particpant.
    // Using broadcast will automatically go to all clients except for the new client.
    socket.broadcast.emit('messageFromServer', "Someone else has joined!");
    

    // ---


    // --- Client to client communications

    // Chat messages
    socket.on('chatToServer', (chat) => {
    // Using broadcast will automatically go to all clients except for sender.
        socket.broadcast.emit('chatFromServer', chat);
    })

    // Miscellaneous data
    socket.on('dataToServer', (data) => {
        socket.broadcast.emit('dataFromServer', data);
    })

});