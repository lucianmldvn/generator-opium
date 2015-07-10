'use strict';

var chai = require('chai');
var expect = chai.expect;

var <%= routeName %>Controller = require('../../api/<%= routeFileName %>/<%= routeFileName %>.controller');

describe('Controller <%= routeName %>Controller', function () {
    it('should exists', function (done) {
        expect(<%= routeName %>Controller).not.to.be.an('undefined');
        expect(<%= routeName %>Controller).to.be.an('object');
        done();
    });
});