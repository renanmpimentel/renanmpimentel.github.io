var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    cache       = require('gulp-cache'),
    uglify      = require('gulp-uglify'),
	concat      = require('gulp-concat'),
    minifyCss   = require('gulp-minify-css'),
    imagemin    = require('gulp-imagemin');

/**
 * Imagemin Task
 */
gulp.task('imagemin', function () {
    return gulp.src('src/img/**/*.{jpg,png,gif}')
        .pipe(plumber())
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('assets/img/'));
});

/**
 * Javascript Task
 */
gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/'));
});

/**
 * CSS Task
 */
gulp.task('css', function () {
    return gulp.src('src/css/*.css')
        .pipe(plumber())
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('assets/css/'));
});

/**
 * Watch stylus files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin']);
});

gulp.task('default', ['imagemin', 'js', 'css', 'watch']);
