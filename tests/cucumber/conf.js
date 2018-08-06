exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['features/*.feature'],
    cucumberOpts: {
        require: ['features/step_definitions/*.steps.js'],
        format: 'json:tests/cucumberReport/json/cucumber_report.json',
    },
    onPrepare: function() {
        browser
            .manage()
            .window()
            .maximize()
    },
}
