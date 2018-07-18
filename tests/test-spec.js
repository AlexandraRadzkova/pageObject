const HomePage = require('../pages/HomePage')
const homePage = new HomePage()
describe('test', () => {
    xit('logo', () => {
        homePage.goToPage()
        expect(homePage.data.logo.isDisplayed()).toBeTruthy()
    })

    it('checkButton', () => {
        homePage
            .goToPage()
            .then(() => {
                return homePage.selectElementByText('heroButtons', 'Car Insurance')
            })
            .then(element => {
                return homePage.clickElement(element)
            })
            .then(() => {
                browser.getCurrentUrl().then(currentUrl => {
                    if (!currentUrl.includes('questionset')) {
                        console.log("doesn't containt questionset")
                    }
                })
            })

        expect(browser.getCurrentUrl()).toContain('car-insurance')
    })
})
