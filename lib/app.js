const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan')('dev');
const cors = require('cors')();
const errorHandler= require('./error-handler')();
const ensureAuth = require('./auth/ensure-auth')();
const auth = require('./routes/auth');
const user = require('./routes/user');
const neighborhoods = require('./routes/neighborhoods');
const restaurants = require('./routes/restaurants');
const reviews = require('./routes/reviews');

app.use(morgan);
app.use(cors);

app.use('/api/auth', auth);
// app.use('/api/user', ensureAuth, user);
// app.use('/api/neighborhoods', ensureAuth, neighborhoods);
// app.use('/api/restaurants', ensureAuth, restaurants);
// app.use('/api/reviews', ensureAuth, reviews);

app.use('/api/user', user);
app.use('/api/neighborhoods', neighborhoods);
app.use('/api/restaurants', restaurants);
app.use('/api/reviews', reviews);



// Serve static assets when in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.use(errorHandler);

module.exports = app;