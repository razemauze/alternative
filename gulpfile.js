var gulp		= require('gulp');
var plumber		= require('gulp-plumber');

exports.default = defaultTask;

// Plumber
var onError = function (err) {
	console.log('An error occurred:', err.message);
	this.emit('end');
}

function defaultTask(cb) {
	cb();
	gulp.watch('scss/**/*.scss', gulp.parallel('styles'));
}

// Styles changes
gulp.task('styles', function () {
	var sass		= require('gulp-sass')
	var cssnano		= require('gulp-cssnano');
	var sourcemaps	= require('gulp-sourcemaps');
	var postcss		= require('gulp-postcss');

	var cssnanoOptions = {
		discardComments: {
			removeAll: true
		}
	}

	return gulp.src('scss/*.scss')
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(postcss([
			require('autoprefixer'),
		]))
		.pipe(cssnano(cssnanoOptions))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('css'))
});