const express = require('express');
const app = express();
const config = require('./config/config.js');

require('./config/express')(app, config);
require('./config/passport')();
require('./config/routes')(app);

module.exports = app;


