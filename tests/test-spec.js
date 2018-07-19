const HomePage = require('../pages/HomePage')
const CarInsurancePage = require('../pages/carInsurancePage')
const CarInsuranceFormPage = require('../pages/carInsuranceFormPage')

const homePage = new HomePage()
const carInsurancePage = new CarInsurancePage()
const carInsuranceFormPage = new CarInsuranceFormPage()

describe('test', () => {
    it('fill car insurance form', () => {
        return homePage
            .goToPage()
            .then(() => {
                return homePage.clickCarInsuranceButton()
            })
            .then(() => {
                return browser.getCurrentUrl().then(currentUrl => {
                    if (!currentUrl.includes('questionset')) {
                        console.log("doesn't containt questionset")
                        return carInsurancePage.clickGetNewQuoteButton()
                    }
                })
            })
            .then(() => {
                return carInsuranceFormPage.fillField('carRegistrationYear', '1753')
            })
            .then(() => {
                return carInsuranceFormPage.fillField('houseNumber', '23')
            })
            .then(() => {
                return carInsuranceFormPage.fillField('postCode', 'CH5 3UZ')
            })
            .then(() => {
                return carInsuranceFormPage.clickFindAddressButton()
            })
            .then(() => {
                return browser.sleep(1000)
            })
            .then(() => {
                return carInsuranceFormPage.fillField(
                    'insureAddressDropdown',
                    'Online Leads Ltd, Moneysupermarket House, St. Davids Park, Ewloe, Deeside, Clwyd, CH53UZ',
                    //protractor.Key.ENTER,
                )
            })
            .then(() => {
                return carInsuranceFormPage.fillField('dateField', '29')
            })
            .then(() => {
                return carInsuranceFormPage.fillField('monthField', '05')
            })
            .then(() => {
                return carInsuranceFormPage.fillField('yearField', '1998')
            })
            .then(() => {
                return carInsuranceFormPage.clickRadioButton('kindOfDrivenLicense')
            })
            .then(() => {
                return browser.sleep(3000)
            })
    })
})
