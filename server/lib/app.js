const app = require('express')();
const morgan = require('morgan')('dev');
const cors = require('cors')();
const errorHandler= require('./error-handler')();
// const ensureAuth = require('./auth/ensure-auth')();
const auth = require('./routes/auth');
// const user = require('./routes/user');
const neighborhoods = require('./routes/neighborhoods');

app.use(morgan);
app.use(cors);

app.use('/api/auth', auth);
// app.use('/api/user', user);
app.use('/api/neighborhoods', neighborhoods);

app.use(errorHandler);
module.exports = app;