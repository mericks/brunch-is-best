const app = require('express')();
const morgan = require('morgan')('dev');
const cors = require('cors')();

app.use(morgan);
app.use(cors);

module.exports = app;