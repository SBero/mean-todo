var gulp = require('gulp');
var karma = require('karma').server;

gulp.task('angular-test', function(){
	karma.start({
		configFile: __dirname + "/test/karma-angular.conf.js"
	})
});

gulp.task('default', function(){
  
});