const server = require('http').createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello');
}),
hostname = '127.0.0.1',
port = 3000;

// launch the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// start listening for socket connections
const io = require('socket.io').listen(server);

io.on('connection', (socket) => {
    
    // --- intial connection messages

    // post new connectino message to server console
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