const http = require('http');
const fs = require('fs');
const debug = require('debug');

const log = debug('*');

const page404 = fs.readFileSync('../public/404.html');

const server = http.createServer((req, res) => {
    const path = req.url === '/' ? '/index.html' : req.url;
    console.log('request', req.url, path, req.headers['user-agent'])

    const file = fs.readFile(`../public/${ path }`, (err, data) => {
        console.log('file was read');
        if (err) {
            data = page404;
        }
        res.write(data);
        res.end();
    });
})


log('listening at localhost:8080');

server.listen(8080);