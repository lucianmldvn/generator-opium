'use strict';

var chai = require('chai');
var expect = chai.expect;

var <%= libName %> = require('../../lib/<%= libFileName %>');

describe('Lib <%= libName %>', function () {
    it('should exists', function (done) {
        expect(<%= libName %>).not.to.be.an('undefined');
        expect(<%= libName %>).to.be.an('object');
        done();
    });
});