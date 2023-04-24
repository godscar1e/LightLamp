const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // Чтение файла index.html
    fs.readFile('../index.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end(`Error getting the file: ${err}.`);
        } else {
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
