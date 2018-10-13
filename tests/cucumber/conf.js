exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['features/*.feature'],
    cucumberOpts: {
        require: ['features/step_definitions/*.steps.js'],
        format: 'json:tests/cucumberReport/json/cucumber_report.json',
    },
    capabilities: {
        browserName: 'chrome', 
        chromeOptions: {
            args: [
                'headless',
                'no-sandbox',
                'disable-dev-shm-usage',
            ]
        }
    },
    onPrepare: function() {
        browser
            .manage()
            .window()
            .maximize()
    },
}
