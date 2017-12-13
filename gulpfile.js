var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('docs/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('docs/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest("docs/js"))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function(){

    browserSync.init({
      server: './docs'
    });

    gulp.watch('docs/scss/**/*.scss', ['sass']);
    gulp.watch('docs/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['js', 'serve']);
