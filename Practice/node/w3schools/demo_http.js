var http = require('http');

// create a server object
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); // added if response is supposed to be displayed in HTML
    res.write('Hello World'); // write a response to the client
    res.end(); // end the response
}).listen(8080); // the server object listens on port 8080

