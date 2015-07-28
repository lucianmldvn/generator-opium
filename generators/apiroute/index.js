'use strict';

var generators = require('yeoman-generator');
var _ = require('lodash');
var colors = require('colors/safe');

var helpers = require('../../helpers');

module.exports = generators.Base.extend({
    constructor: function constructor() {
        generators.Base.apply(this, arguments);
        this.argument('name', {
            type: String,
            required: true
        });
        this.routeName = _.kebabCase(this.name);
    },
    writing: function writing() {
        this.fs.copyTpl(
            this.templatePath('index.js'),
            this.destinationPath('api/' + this.routeName + '/index.js'), {
                routeName: this.routeName
            }
        );

        this.fs.copyTpl(
            this.templatePath('apiroute.controller.js'),
            this.destinationPath('api/' + this.routeName + '/' + this.routeName + '.controller.js'), {
                routeName: _.capitalize(_.camelCase(this.routeName))
            }
        );

        this.fs.copyTpl(
            this.templatePath('controller.test.js'),
            this.destinationPath('test/api/' + this.routeName + '/' + this.routeName + '.controller.js'), {
                routeFileName: this.routeName,
                routeName: _.capitalize(_.camelCase(this.routeName))
            }
        );

        var lineToAdd = "app.use('/api/" + this.routeName + "', require('./api/" + this.routeName + "'));";
        helpers.AddLineToFile('routes.js', lineToAdd, helpers.Markers.API_ROUTE_MARKER, '    ');
    },
    end: function end() {
        this.log(colors.green('   update') + ' routes.js');
    }
});