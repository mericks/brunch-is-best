const app = require('express')();
const morgan = require('morgan')('dev');
const errorHandler= require('./error-handler')();
const cors = require('cors')();
const auth = require('./routes/auth');
// const ensureAuth = require('./auth/ensure-auth')();

app.use(morgan);
app.use(cors);

app.use('/api/auth', auth);

app.use(errorHandler);
module.exports = app;