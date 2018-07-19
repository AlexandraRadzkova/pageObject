const HomePage = require('../pages/HomePage')
const CarInsurancePage = require('../pages/carInsurancePage')
const homePage = new HomePage()
const carInsurancePage = new CarInsurancePage()
describe('test', () => {
    xit('logo', () => {
        homePage.goToPage()
        expect(homePage.data.logo.isDisplayed()).toBeTruthy()
    })

    it('checkButton', () => {
        homePage
            .goToPage()
            .then(() => {
                homePage.clickCarInsuranceButton()
            })
            .then(() => {
                browser.getCurrentUrl().then(currentUrl => {
                    if (!currentUrl.includes('questionset')) {
                        console.log("doesn't containt questionset")
                        carInsurancePage.clickGetNewQuoteButton()
                    }
                })
            })

        expect(browser.getCurrentUrl()).toContain('questionset')
    })
})
