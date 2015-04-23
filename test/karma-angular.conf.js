// Karma configuration
// Generated on Wed Apr 22 2015 21:11:35 GMT-0600 (MDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../public/',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js",
        "https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js",
        "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0-rc.0/angular.min.js",
        "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0-rc.0/angular-route.min.js",
        "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0-rc.0/angular-resource.min.js",
        "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0-rc.0/angular-animate.min.js",
        "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0-rc.0/angular-mocks.js",
        "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0-rc.0/angular-sanitize.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js",
        "js/**/*.js",
        "js/**/*.html",
        "app/**/*.js",
        "app/**/*.html",
        "../test/unit-angular/**/*.js"
    ],


    // list of files to exclude
    exclude: [
    ],

    plugins: [
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-ng-html2js-preprocessor',
        'karma-mocha-reporter',
        'karma-coverage'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'app/**/*.html': ['ng-html2js'],
        'js/**/*.html': ['ng-html2js'],
        'app/**/*.js': ['coverage'],
        'js/**/*.js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],

    coverageReporter: {
        type: 'html',
        dir: 'coverage/',
        subdir: 'report-html'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
