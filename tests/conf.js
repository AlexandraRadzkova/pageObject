exports.config = {
    seleniumAddress: 'http://localhost:4443/wd/hub',
    capabilities: { browserName: 'chrome' },
    specs: ['test-spec.js'],
    onPrepare: function() {
        browser.driver
            .manage()
            .window()
            .setSize(1920, 1080)
    },
}
