'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('opium:app', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withOptions({
                'skip-install': true
            })
            .withPrompt({
                name: 'testapp'
            })
            .on('end', done);
    });

    it('creates files', function () {
        assert.file([
            'config/express.js',
            'config/cors.js',
            'config/environment/development.js',
            'config/environment/production.js',
            '.gitignore',
            '.jshintignore',
            '.jshintrc',
            '.stylishcolors',
            'package.json',
            'testapp.js',
            'routes.js'
        ]);
    });
});