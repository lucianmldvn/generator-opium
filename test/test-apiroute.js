'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var fs = require('fs');

describe('opium:apiroute', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/apiroute'))
            .inTmpDir(function (dir) {
                // Mock routes.js (created by :app generator)
                var async = this.async();
                fs.writeFile(dir + '/routes.js', '// endregion API routes', async);
            })
            .withArguments(['testroute'])
            .on('end', done);
    });

    it('creates files', function () {
        assert.file([
            'api/testroute/index.js',
            'api/testroute/testroute.controller.js',
            'test/api/testroute/testroute.controller.js'
        ]);
    });

    it('adds the route to routes.js', function () {
        assert.fileContent('routes.js', /app\.use\('\/api\/testroute', require\('\.\/api\/testroute'\)\);/);
    });

});