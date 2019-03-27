const gulp = require('gulp');
const { emptydir } = require('fs-nextra');
const ts = require('gulp-typescript');
const merge = require('merge2');
const project = ts.createProject('tsconfig.json');

async function build() {
  await Promise.all([
    emptydir('dist')
  ]);

  const result = project.src()
    .pipe(project());

  return merge([
    result.js.pipe(gulp.dest('dist')),
    result.dts.pipe(gulp.dest('dist'))
  ]);
}

gulp.task('default', build);
gulp.task('build', build);