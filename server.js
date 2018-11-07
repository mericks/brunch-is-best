const http = require('http');
const app = require('./lib/app');
const config = require('./lib/utils/config');
const connect = require('./lib/utils/connect');

connect(config.MONGODB_URI);

const server = http.createServer(app);
const port = config.PORT;

server.listen(port, () => {
    console.log('server running', server.address().port);
});
