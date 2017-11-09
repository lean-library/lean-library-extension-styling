import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

gulp.task('styles', () => {
  return gulp.src([
    'src/extension.scss',
  ])
    .pipe($.plumber())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['node_modules']
    }).on('error', $.sass.logError))
    .pipe($.rename('lean.scss'))
    .pipe(gulp.dest('../leanlibrary-extension/app/styles.scss/'));
});
//
gulp.task('default', ['styles'], () => {
  gulp.watch([
    'src/*.*',
  ], [ 'styles']);
});
