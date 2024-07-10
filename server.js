//nessessery files are imported
const http = require('http');
const fs = require('fs');
const path = require('path');

// port number for the server
const port = 3001;

// server is created
http.createServer((req, res) => {
    // Determine the file path based on the request URL
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const extname = path.extname(filePath);

    // Determine content type based on file extension
    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg'
    }[extname] || 'text/html';

    if (!extname && !filePath.endsWith('.html')) filePath += '.html';

    // Read the requested file from the file system
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), (_, notFoundContent) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(notFoundContent, 'utf8');
                });
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
}).listen(port, () => {                                             //start server on above port number
    console.log(`Server running at http://localhost:${port}`);
});

