var gulp = require('gulp');
var less = require('gulp-less');
var min = require('gulp-usemin');
var livereload = require('gulp-livereload');
var webserver = require('gulp-webserver');
var open = require("gulp-open");

var shell = require('gulp-shell')
var run = require('gulp-run');

gulp.task('server', function() {
  gulp.src('platforms/browser/www')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('less', function () {
  gulp.src('./www/styles/app.less')
  .pipe(less())
  .pipe(min({
    cssmin: true
  }))
  .pipe(gulp.dest('./www/css'))
  .pipe(livereload());
});

gulp.task('build-app', function (done) {
  run('cordova prepare browser').exec(function(){
    livereload.reload()
    done()
  })
});

gulp.task('build-ios-app', shell.task([
  'cordova emulate ios'
]));

gulp.task('build-android-app', shell.task([
  'cordova emulate android'
]));

gulp.task('watch', ['server'], function() {
  livereload.listen();
  gulp.watch('www/**/*', ['build-app', 'build-ios-app']);
  gulp.watch('www/styles/*', ['less']);
});

