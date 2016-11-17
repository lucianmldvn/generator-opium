'use strict';

var chai = require('chai');
var expect = chai.expect;

var <%= routeName %>Controller = require('../../api/<%= routeFileName %>/<%= routeFileName %>.controller');

describe('Controller <%= routeName %>Controller', function <%= routeName %>ControllerTest () {
    it('should exist', function (done) {
        expect(<%= routeName %>Controller).not.to.be.an('undefined');
        expect(<%= routeName %>Controller).to.be.an('object');
        done();
    });
});