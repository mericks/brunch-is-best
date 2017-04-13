const http = require('http');
const app = require('./lib/app');
// require ('./lib/connection');

const server = http.createServer(app);
const port = 8080;

server.listen(port, () => {
    console.log('server running', server.address());
});