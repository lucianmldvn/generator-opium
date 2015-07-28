'use strict';

var generators = require('yeoman-generator');
var yosay = require('yosay');
var _ = require('lodash');
var colors = require('colors/safe');
var fs = require('fs');

module.exports = generators.Base.extend({
    initializing: {
        // Your initialization methods (checking current project state, getting configs, etc)
    },
    prompting: {
        //Where you prompt users for options (where you'd call this.prompt())
        greetUser: function greetUser() {
            this.log(yosay('Welcome to Opium, stranger!'));
        },
        setApplicationName: function setApplicationName() {
            var done = this.async();
            this.prompt({
                type: 'input',
                name: 'name',
                message: 'What\'s your app name ?',
                default: this.appname
            }, function (answers) {
                this.appname = _.kebabCase(answers.name)
                done();
            }.bind(this));
        }
    },
    configuring: function configuring() {
        // Saving configurations and configure the project (creating .editorconfig files and other metadata files)
        this.fs.copy(this.templatePath('config/express.js'), this.destinationPath('config/express.js'));
        this.fs.copy(this.templatePath('config/cors.js'), this.destinationPath('config/cors.js'));
        this.fs.copy(this.templatePath('config/environment/development.js'), this.destinationPath('config/environment/development.js'));
        this.fs.copy(this.templatePath('config/environment/production.js'), this.destinationPath('config/environment/production.js'));
        this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
        this.fs.copy(this.templatePath('jshintignore'), this.destinationPath('.jshintignore'));
        this.fs.copy(this.templatePath('jshintrc'), this.destinationPath('.jshintrc'));
        this.fs.copy(this.templatePath('stylishcolors'), this.destinationPath('.stylishcolors'));
    },
    default: {},
    writing: {
        // Where you write the generator specific files (routes, controllers, etc)
        packageJson: function packageJson() {
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'), {
                    appname: this.appname
                }
            );
        },
        appJs: function appJs() {
            this.fs.copyTpl(
                this.templatePath('app.js'),
                this.destinationPath(this.appname + '.js'), {
                    appname: this.appname
                }
            );
        },
        routesJs: function routesJs() {
            this.fs.copy(this.templatePath('routes.js'), this.destinationPath('routes.js'));
        },
        createEmptyFolders: function createEmptyFolder() {
            fs.mkdirSync('api');
            this.log(colors.green('   create') + ' api');
            fs.mkdirSync('components');
            this.log(colors.green('   create') + ' components');
            fs.mkdirSync('lib');
            this.log(colors.green('   create') + ' lib');
            fs.mkdirSync('public');
            this.log(colors.green('   create') + ' public');
            fs.mkdirSync('test');
            this.log(colors.green('   create') + ' test');
        }
    },
    conflicts: {
        // Where conflicts are handled (used internally)
    },
    install: function install() {
        this.log(colors.green('   install') + ' dependencies');
        // Where installation are run (npm, bower)
        if (this.options['skip-install'] !== true) {
            this.npmInstall(['async', 'body-parser', 'chai', 'colors', 'express', 'jshint', 'jshint-stylish-ex',
             'lodash', 'mocha', 'request', 'supervisor', 'supertest', 'sinon', 'sinon-chai'], {
                'save': true
            });
        }
    },
    end: {
        // Called last, cleanup, say good bye, etc
    }
});