// --------------------------------------------------------------------------
// This is the javascript required for interactive data retrieval from
// the Max-based Node host via websockets. It uses fairly standard jQuery
// to perform its thing...
// --------------------------------------------------------------------------
/* global $ */

const io = require('socket.io-client');
const http = require('http');
const maxAPI = require("max-api");
const socket = io.connect('http://angle-shooter.herokuapp.com/');


// Add a connect listener 'connectionEstabilished' id: socket
socket.on('connectionEstabilished', function (data) {
  console.log('new connection');
  maxAPI.outlet(["connected", data.id]);
});

socket.on('unityShootPressed', function(data) {
  console.log('user emitted shoot');
  maxAPI.outlet(['shootpressed', data.id]);
});

socket.on('unityAddUser', function(data) {
  console.log('user joined');
  maxAPI.outlet(['user', data.username]);
});

socket.on('unityRemoveUser', function(data) {
  console.log('user logged off');
  maxAPI.outlet(['userLeft', data.username]);
});

console.log("ready to roq");
