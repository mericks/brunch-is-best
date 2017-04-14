process.eng.DB_URI = 'mongodb://localhost:27017/best-brunch-test';
require('../lib/connection');
const mongoose = require('mongoose');

before(() => mongoose.connection.dropDatabase());


