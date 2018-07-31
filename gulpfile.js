const gulp = require('gulp')
const concat = require('gulp-concat')
const del = require('del')
const gutil = require('gulp-util')
const uglify = require('gulp-uglify-es').default

const paths = {
  features: ['tests/cucumber/features/*.feature'],
  specs: ['tests/cucumber/features/step_definitions/*.steps.js'],
  config: ['tests/cucumber/conf.js'],
}

gulp.task('clean', function() {
  return del(['build'])
})

gulp.task('cucumber-features', function() {
  return gulp
    .src(paths.features)
    .pipe(concat('total.feature'))
    .pipe(gulp.dest('build/tests/cucumber/features'))
})

gulp.task('cucumber-specs', function() {
  return gulp
    .src(paths.specs)
    .pipe(concat('total.steps.js'))
    .pipe(uglify())
    .on('error', function(err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString())
    })
    .pipe(gulp.dest('build/tests/cucumber/features/step_definitions'))
})

gulp.task('cucumber-config', function() {
  return gulp.src(paths.config).pipe(gulp.dest('build/tests/cucumber'))
})

gulp.task('cucumber-build', ['cucumber-features', 'cucumber-specs', 'cucumber-config'])
