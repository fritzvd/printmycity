var o2g = require('osmtogeojson');
var fs = require('fs');

var data = JSON.parse(fs.readFileSync('./osm.json', 'utf8'));
var res = o2g(data);


var static = require('node-static');
var file = new static.Server('./');
var server = require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response)
  }).resume();
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  console.log('youre in'  )
  socket.on('message', function (message) {
    console.log('Got message: ', message);
    socket.emit('message', message);
  });

  socket.on('gimme', function (query) {
    socket.emit('data', data);
  })
});

server.listen(process.env.PORT || 5000);
