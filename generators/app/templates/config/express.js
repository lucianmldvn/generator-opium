'use strict';

/**
 * Express configuration
 */

var bodyParser = require('body-parser');
var multer = require('multer');

var cors = require('./cors');

module.exports = function (app) {
    app.use(bodyParser.json()); // for parsing application/json

    app.use(bodyParser.urlencoded({
        extended: true
    })); // for parsing application/x-www-form-urlencoded

    app.use(multer()); // for parsing multipart/form-data

    app.use(cors); // enable cross-origin resource sharing

    app.use('/api', function (req, res, next) {
        res.type('json');
        next();
    });
};