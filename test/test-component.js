'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('opium:component', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/component'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withArguments(['testcomponent'])
            .on('end', done);
    });

    it('creates files', function () {
        assert.file([
            'components/testcomponent/index.js',
            'test/components/testcomponent/index.js'
        ]);
    });
});