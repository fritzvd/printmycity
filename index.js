var io = require('socket.io-client');

var btn = document.createElement('button');
document.body.appendChild(btn);


var socket = io.connect('localhost:5000');
socket.emit('message', 'piet')

socket.on('message', function (message) {
  console.log(message, arguments);

});



btn.onclick = function () {
  socket.emit('gimme'); 
}

var osm;
socket.on('data', function (data) {
  // osm = JSON.parse(data);
  osm = data.elements;
  console.log(data, osm)
});

var d3 = require('d3');

d3.geo.

