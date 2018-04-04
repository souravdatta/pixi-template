const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');

gulp.task('wcompile', () => {
  watch('appjs/*.js', () => {
    gulp.src('appjs/*.js').pipe(babel({
      presets: ['env']
    })).pipe(gulp.dest('dist/'));
  });
});

gulp.task('default', ['wcompile']);
