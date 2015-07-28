'use strict';

/**
 * Express configuration
 */

var bodyParser = require('body-parser');

var cors = require('./cors');

module.exports = function expressConfig(app) {
    app.use(bodyParser.json()); // for parsing application/json

    app.use(bodyParser.urlencoded({
        extended: true
    })); // for parsing application/x-www-form-urlencoded

    app.use(cors); // enable cross-origin resource sharing

    app.use('/api', function jsonResponseMiddleware(req, res, next) {
        res.type('json');
        next();
    });
};