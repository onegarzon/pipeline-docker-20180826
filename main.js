// load the http module
var http = require('http');
var fs = require('fs');

//
//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var myReadStream = fs.createReadStream('index.html', 'utf8');
  myReadStream.pipe(res);
}).listen(8089); //the server object listens on port 8089
