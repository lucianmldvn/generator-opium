'use strict';

/**
 * Main application routes
 */

var express = require('express');

module.exports = function (app) {

    app.use(express.static(__dirname + '/public'));

    // region API routes
    // endregion API routes

};