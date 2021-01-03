const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res) {
    const q = url.parse(req.url, true);

    let filename;

    if (q.pathname === '/') {
        filename = './index.html';
    } else {
        filename = '.' + q.pathname + '.html';
    }

    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            const file = fs.readFileSync("./404.html", "utf8");
            return res.end(file);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }
    })
}).listen(8080);
