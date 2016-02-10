'use strict'

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');
var minifyHTML = require('gulp-htmlmin');
var cssnano = require('gulp-cssnano');
var del = require('del');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task("minifyHTML", function(){
	return gulp.src([
		'src/*.html',
		'src/partials/*.html'
		], { base: './src/'})
	.pipe(minifyHTML({collapseWhitespace: true}))
	.pipe(gulp.dest("dist/src"))
});

gulp.task('concatScripts', function() {
	return gulp.src([
		'src/js/apps.js',
		'src/js/mainApp.js'
		])
	.pipe(maps.init())
	.pipe(concat('apps.js'))
	.pipe(gulp.dest('src/js'));
});

gulp.task('minifyScripts', ['concatScripts'], function() {
	return gulp.src([
			'src/js/apps.js',
			'src/js/form.js', 
			'src/js/insta.js', 
			'src/js/light.js', 
			'src/js/quiz.js']
			)
		.pipe(uglify())
		.pipe(maps.write('./'))
		.pipe(gulp.dest('dist/src/js'));
});

gulp.task('compileSass', function() {
	return gulp.src([
			'src/scss/style.scss', 
			'src/scss/instagal.scss', 
			'src/scss/quiz.scss', 
			'src/scss/forms.scss'])
		.pipe(maps.init())
		.pipe(sass()) 
		.pipe(maps.write('./'))
		.pipe(gulp.dest('src/css'));
});

gulp.task('minifyCss',['compileSass'], function(){
	return gulp.src([
			'src/css/style.css', 
			'src/css/instagal.css', 
			'src/css/quiz.css', 
			'src/css/forms.css'])
		.pipe(maps.init())
		.pipe(cssnano())
		.pipe(maps.write('./'))
		.pipe(gulp.dest('dist/src/css'));
});


gulp.task('watchFiles', function() {
	gulp.watch('src/scss/**/*.scss', ['compileSass']);
});

gulp.task('serve', ['watchFiles']);

gulp.task('build', ['minifyHTML', 'compileSass', 'minifyScripts', 'minifyCss'], function() {
	return gulp.src(['src/js/main.min.js', 'src/mock/**', "src/img/**"], { base: './'})
			.pipe(gulp.dest('dist'));
});

gulp.task('clean', function(){
	del(['dist', 'src/css/style.css*']);
});

gulp.task('default', ['clean'], function() {
	gulp.start('build');
});