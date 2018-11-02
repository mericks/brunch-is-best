const http = require('http');
const app = require('./lib/app');
require ('./lib/connection');

const server = http.createServer(app);

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log('server running', server.address());
});