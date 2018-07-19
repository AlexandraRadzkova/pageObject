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
                        return carInsurancePage.clickElement('getNewQuoteButton')
                    }
                })
            })
            .then(() => {
                return carInsuranceFormPage.fillField('carRegistrationYear', '1753')
            })
            .then(() => {
                return carInsuranceFormPage.fillField('houseNumber', '23', protractor.Key.ENTER)
            })
            .then(() => {
                return carInsuranceFormPage.fillField('postCode', 'CH5 3UZ', protractor.Key.ENTER)
            })
            .then(() => {
                return carInsuranceFormPage.clickElement('findAddressButton')
            })
            .then(() => {
                return browser.sleep(1000)
            })
            .then(() => {
                return carInsuranceFormPage.clickElement('insureAddress')
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
                return carInsuranceFormPage.clickElement('kindOfDrivenLicense')
            })
            .then(() => {
                return carInsuranceFormPage.clickElement('restrictionLast')
            })
            .then(() => {
                return carInsuranceFormPage.fillField('currentLicenceField', '1')
            })
            .then(() => {
                return carInsuranceFormPage.selectRadioButton('anyMedicalConditions')
            })
            .then(() => {
                return carInsuranceFormPage.selectRadioButton('anyOtherCars')
            })
            .then(() => {
                return browser.sleep(3000)
            })
            .then(() => {
                return carInsuranceFormPage.clickElement('continueButton')
            })
            .then(() => browser.quit())
    })
})
