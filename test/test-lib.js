'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('opium:lib', function opiumLibTest() {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/lib'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withArguments(['testlib'])
            .on('end', done);
    });

    it('creates files', function () {
        assert.file([
            'lib/testlib.js',
            'test/lib/testlib.js'
        ]);
    });
});