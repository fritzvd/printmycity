var io = require('socket.io-client');
var d3 = require('d3');


var btn = document.createElement('button');
btn.innerHTML = "Hoi";
document.body.appendChild(btn);

var width = 960,
    height = 1160;

// var projection = d3.geo.albers()
//     .center([0, 55.4])
//     .rotate([4.4, 0])
//     .parallels([50, 60])
//     .scale(1200 * 5)
//     .translate([width / 2, height / 2]);

// var path = d3.geo.path()
//     .projection(projection);

var path = d3.geo.path()
    .projection(d3.geo.mercator()
    .scale(20000)
    .translate([0, 3800]));

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);



var socket = io.connect('localhost:5000');

btn.onclick = function () {
  socket.emit('gimme'); 
}

var osm;
socket.on('data', function (data) {
  // osm = JSON.parse(data);
  osm = data;
  data.features.forEach(function (feature) {
    if (feature.properties.tags.hasOwnProperty('highway')) {
      return 
    }
    console.log(feature)
  })
  // debugger
  // d3.json(osm, function(error, uk) {
  //   svg.append("g")
  //       .attr("class", "black")
  //       .selectAll("path")
  //       .data(osm.features)
  //       .enter(function (d) {
  //         if (!d.properties.tags.hasOwnProperty('highway'))
  //         return d;
  //       })
  //       .append("path")
  //       .attr("d", path);
  // });
});




