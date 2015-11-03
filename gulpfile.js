/*jslint node: true */
var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var gutil = require('gutil');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create(); 
var reload = browserSync.reload;

gulp.task('styles', function() {
	gulp.src("css/theme.less")
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(less())	
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	.pipe(sourcemaps.write())
	.pipe(rename('theme.css'))
	.pipe(gulp.dest("css"))
	.pipe(reload({stream: true}));
});


gulp.task('lint', function() {
    gulp.src('js/*.js')
    	.pipe(plumber())        
    	.pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
        
});

gulp.task('default', function() {
    gulp.start('styles');
});

gulp.task('watch', ['styles'], function() {

	browserSync.init({
        proxy: "sklep.dev"
    });

	// Watch .less files
	gulp.watch('css/*.less', ['styles']);  
	gulp.watch('js/*.js', ['lint']);  
	gulp.watch('*.php').on('change', browserSync.reload);
});