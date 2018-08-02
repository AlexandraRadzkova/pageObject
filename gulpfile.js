const gulp = require('gulp')
const concat = require('gulp-concat')
const del = require('del')
const gutil = require('gulp-util')
const uglify = require('gulp-uglify-es').default
const protractor = require('gulp-protractor').protractor
const argv = require('yargs').argv

const paths = {
    features: ['tests/cucumber/features/*.feature'],
    steps: ['tests/cucumber/features/step_definitions/*.steps.js'],
    config: 'tests/cucumber/conf.js',
    helpers: 'tests/helpers/helpers.js',
    buildHelpersFolder: 'build/tests/helpers',
    pages: ['pages/*.js'],
    buildFeaturesFolder: 'build/tests/cucumber/features',
    buildStepsFolder: 'build/tests/cucumber/features/step_definitions',
    buildPagesFolder: 'build/pages',
    buildStepsFile: 'build/tests/cucumber/features/step_definitions/total.steps.js',
    buildConfigFolder: 'build/tests/cucumber',
    buildConfigFile: 'build/tests/cucumber/conf.js',
    buildFeaturesFiles: 'build/tests/cucumber/features/*.feature',
}

gulp.task('clean', function() {
    return del(['build'])
})

gulp.task('cucumber-features', function() {
    return gulp.src(paths.features).pipe(gulp.dest(paths.buildFeaturesFolder))
})

gulp.task('cucumber-steps', function() {
    return gulp
        .src(paths.steps)
        .pipe(concat('total.steps.js'))
        .pipe(uglify())
        .on('error', function(err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString())
        })
        .pipe(gulp.dest(paths.buildStepsFolder))
})

gulp.task('cucumber-config', function() {
    return gulp.src(paths.config).pipe(gulp.dest(paths.buildConfigFolder))
})

gulp.task('copy-helpers', function() {
    return gulp
        .src(paths.helpers)
        .pipe(uglify())
        .pipe(gulp.dest(paths.buildHelpersFolder))
})

gulp.task('copy-pages', function() {
    return gulp
        .src(paths.pages)
        .pipe(uglify())
        .pipe(gulp.dest(paths.buildPagesFolder))
})

gulp.task('cucumber-run', function() {
    return gulp
        .src(paths.buildFeaturesFiles)
        .pipe(
            protractor({
                configFile: paths.buildConfigFile,
                args: ['--browser', argv.browser || 'chrome'],
            }),
        )
        .on('error', function(e) {
            throw e
        })
})

gulp.task(
    'cucumber-build',
    gulp.parallel(
        'cucumber-features',
        'cucumber-steps',
        'cucumber-config',
        'copy-helpers',
        'copy-pages',
    ),
)

gulp.task('cucumber', gulp.series('cucumber-build', 'cucumber-run', 'clean'))
