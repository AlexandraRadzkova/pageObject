const gulp = require('gulp')
const concat = require('gulp-concat')
const del = require('del')
const gutil = require('gulp-util')
const uglify = require('gulp-uglify-es').default
const protractor = require('gulp-protractor').protractor
const argv = require('yargs').argv
const selenium = require('selenium-standalone')
const SeleniumServer = require('selenium-webdriver/remote').SeleniumServer
const shell = require('shelljs')
const reporter = require('cucumber-html-reporter')
const fs = require('fs-extra')
let server = {}

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
    testSpecFile: 'tests/jasmine/test-spec.js',
    jasmineConfig: 'tests/jasmine/conf.js',
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

gulp.task('cucumber-run', function(done) {
    gulp.src(paths.buildFeaturesFiles)
        .pipe(
            protractor({
                configFile: paths.buildConfigFile,
                args: ['--browser', argv.browser || 'chrome'],
            }).on('error', () => done()),
        )
        .on('end', () => done())
})

gulp.task('jasmine-run', function(done) {
    gulp.src(paths.testSpecFile)
        .pipe(
            protractor({
                configFile: paths.jasmineConfig,
                args: ['--browser', argv.browser || 'chrome'],
            }).on('error', () => done()),
        )
        .on('end', () => done())
})

gulp.task('serverStart', function() {
    const pathToSeleniumJar = require('path').join(
        __dirname,
        'selenium-server',
        'selenium-server-standalone-3.13.0.jar',
    )
    server = new SeleniumServer(pathToSeleniumJar, { port: 4444 })
    return server.start()
})

gulp.task('serverStop', async function() {
    if (argv.browser) {
        // await server.stop()
        await shell.exec('taskkill /IM geckodriver.exe /F', { silent: true })
    }
    await shell.exec('taskkill /IM chromedriver.exe /F', { silent: true })
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

gulp.task('onPrepare', async function() {
    await fs.emptyDir('tests/cucumberReport/json')
    await fs.emptyDir('tests/cucumberReport/html')
})

gulp.task('reportHtml', async function() {
    const options = {
        theme: 'bootstrap',
        jsonFile: 'tests/cucumberReport/json/cucumber_report.json',
        output: 'tests/cucumberReport/html/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            Platform: 'Windows 10 Enterprise x64',
        },
        screenshotsDirectory: 'tests/cucumberReport/screenshots/',
        storeScreenshots: true,
    }
    await reporter.generate(options)
})

gulp.task(
    'cucumber',
    gulp.series(
        'cucumber-build',
        'serverStart',
        'onPrepare',
        'cucumber-run',
        'reportHtml',
        'serverStop',
        'clean',
    ),
)

gulp.task('jasmine', gulp.series('serverStart', 'jasmine-run', 'serverStop'))
