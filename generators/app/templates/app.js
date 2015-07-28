'use strict';

/**
 * Main application file
 */

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var http = require('http');
var colors = require('colors/safe');
var _ = require('lodash');

var config = require('./config/environment/' + process.env.NODE_ENV);
var expressConfig = require('./config/express');
var routes = require('./routes');

// package.json information
var pjson = require('./package.json');

// Setup server
var app = express();
app.locals.title = <%= appTitle %>

var server = http.createServer(app);
expressConfig(app);
routes(app);

// Start server 
server.listen(config.port, config.host, function <%= appTitle %>Server() {
    console.log('\n' + colors
        .green('---------------------------------------------------------------------------'));

    console.log(' ' + app.locals.title + ' server v' + pjson.version + ' is listening on ' +
        colors.green('http://%s:%s') + ' in ' +
        colors.white.bgBlue('%s') + ' mode.',
        config.host, config.port, config.env);

    console.log(colors
        .green('---------------------------------------------------------------------------\n'));
});

// Expose app
exports = module.exports = app;