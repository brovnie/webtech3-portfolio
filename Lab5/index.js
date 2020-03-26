const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//webserver opgestart
const server = http.createServer((req, res) => {
    // 200 - successful
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text-plain');
    switch (req.url) {
        case "/signup":
            res.end("Sign up!!");
            break;
        default:
            res.end("Hello ");
            break;
    }
    console.log(req.url);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});