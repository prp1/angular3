"use strict";

var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint',function () {
	return gulp.src('./*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('test',function () {
	require('./test.js');
});

gulp.task('serve', function () {
	require('./main.js');
});

gulp.task('default',['jshint','test','serve']);
gulp.task('default',['jshint', 'serve']);
gulp.task('build',['jshint', 'test']);