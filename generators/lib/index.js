'use strict';

var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function constructor() {
        generators.Base.apply(this, arguments);
        this.argument('name', {
            type: String,
            required: true
        });
        this.libName = _.kebabCase(this.name);
    },
    writing: function writing() {
        this.fs.copyTpl(
            this.templatePath('lib.js'),
            this.destinationPath('lib/' + this.libName + '.js'), {
                libName: _.capitalize(_.camelCase(this.libName))
            }
        );

        this.fs.copyTpl(
            this.templatePath('test.js'),
            this.destinationPath('test/lib/' + this.libName + '.js'), {
                libFileName: this.libName,
                libName: _.capitalize(_.camelCase(this.libName))
            }
        );
    }
});