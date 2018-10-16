// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello Miiro. Thanks so much....for sharing at https://getintodevops.com/blog/building-your-first-docker-image-with-jenkins-2-guide-for-developers. This is Juan\n");
});

// listen on localhost:8000
server.listen(8089);
console.log("Server listening at http://localhost:8089/");
