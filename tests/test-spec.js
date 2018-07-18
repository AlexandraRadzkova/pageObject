const HomePage = require('../pages/HomePage')
const homePage = new HomePage()
describe('test', () => {
    it('logo', () => {
        homePage.goToPage()
        expect(homePage.data.logo.isDisplayed()).toBeTruthy()
    })

    it('checkButton', () => {
        homePage.goToPage()
        const carInsuranceButton = homePage.selectElement('heroButtons', 'Car Insurance')
        expect(carInsuranceButton.isPresent()).toBeTruthy()
        carInsuranceButton.click()
    })
})
