import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

gulp.task('styles', () => {
  return gulp.src([
    'src/extension.scss',
    'src/beta.scss',
    'src/popup-skip-link.scss',
  ])
    .pipe($.plumber())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['node_modules']
    }).on('error', $.sass.logError))
    .pipe(gulp.dest('../leanlibrary-extension/app/styles'));
});
//
gulp.task('default', ['styles'], () => {
  gulp.watch([
    'src/*.*',
  ], [ 'styles']);
});
