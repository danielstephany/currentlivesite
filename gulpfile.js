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

gulp.task("minifyHTML", function(){
	return gulp.src([
		'src/*.html',
		'src/partials/*.html'
		], { base: './src/'})
	.pipe(minifyHTML({collapseWhitespace: true}))
	.pipe(gulp.dest("dist/src"))
});

gulp.task('minifyScripts', function() {
	return gulp.src([
			'src/js/app.js',
			'src/js/form.js', 
			'src/js/insta.js', 
			'src/js/light.js', 
			'src/js/quiz.js'],
			{base: './src/'})
		.pipe(uglify())
		.pipe(maps.write('./'))
		.pipe(gulp.dest('dist/src/js'));
});

gulp.task('compileSass', function() {
	return gulp.src([
			'src/scss/main.scss', 
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
			'src/css/main.css', 
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
	del(['dist', 'src/css/main.css*']);
});

gulp.task('default', ['clean'], function() {
	gulp.start('build');
});