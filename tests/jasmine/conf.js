exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: { browserName: 'chrome' },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 120000,
    },
    specs: ['test-spec.js'],
    onPrepare: function() {
        return browser.driver
            .manage()
            .window()
            .setSize(1920, 1080)
    },
}
