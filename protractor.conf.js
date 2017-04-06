/**
 * Created by tim.cluff on 4/6/2017.
 */

// Protractor configuration file

/* global jasmine */
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 30000,
    specs: [
        './e2e/*.e2e-spec.js'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:8808/',
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () {}
    },
    useAllAngular2AppRoots: true,
    onPrepare: function() {
        jasmine.getEnv().addReporter(new SpecReporter());
    }
};