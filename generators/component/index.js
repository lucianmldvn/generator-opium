'use strict';

var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);
        this.argument('name', {
            type: String,
            required: true
        });
        this.componentName = _.kebabCase(this.name);
    },
    writing: function () {
        this.fs.copyTpl(
            this.templatePath('index.js'),
            this.destinationPath('components/' + this.componentName + '/index.js'), {
                componentName: _.capitalize(_.camelCase(this.componentName))
            }
        );

        this.fs.copyTpl(
            this.templatePath('test.js'),
            this.destinationPath('test/components/' + this.componentName + '/index.js'), {
                componentFileName: this.componentName,
                componentName: _.capitalize(_.camelCase(this.componentName))
            }
        );
    }
});