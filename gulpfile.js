var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
var fontAwesome = require('node-font-awesome');
var fontAwesome = require('node-font-awesome');

gulp.task('sass', function(){
	gulp.src('./assets/src/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
	   browsers: ['last 2 versions']
	}))
	.pipe(gulp.dest('./assets/dist'));
})
gulp.task('sass:watch', function(){
	gulp.watch('./assets/src/*.scss', ['sass'])
})


 
gulp.task('fonts', function() {
  gulp.src(fontAwesome.fonts)
    .pipe(gulp.dest('./fonts'));
});


gulp.task('default', [ 'sass','sass:watch', 'fonts']);