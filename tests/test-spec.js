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
            .then(() => homePage.clickCarInsuranceButton())
            .then(() => {
                return browser.getCurrentUrl().then(currentUrl => {
                    if (!currentUrl.includes('questionset')) {
                        console.log("doesn't containt questionset")
                        return carInsurancePage.clickElement('getNewQuoteButton')
                    }
                })
            })
            .then(() => carInsuranceFormPage.fillField('carRegistrationYear', '1753'))
            .then(() => carInsuranceFormPage.fillField('houseNumber', '23', protractor.Key.ENTER))
            .then(() => carInsuranceFormPage.fillField('postCode', 'CH5 3UZ', protractor.Key.ENTER))
            .then(() => carInsuranceFormPage.clickElement('findAddressButton'))
            .then(() => browser.sleep(1000))
            .then(() => carInsuranceFormPage.clickElement('insureAddress'))
            .then(() => carInsuranceFormPage.fillField('dateField', '29'))
            .then(() => carInsuranceFormPage.fillField('monthField', '05'))
            .then(() => carInsuranceFormPage.fillField('yearField', '1998'))
            .then(() => carInsuranceFormPage.clickElement('kindOfDrivenLicense'))
            .then(() => carInsuranceFormPage.clickElement('restrictionLast'))
            .then(() => carInsuranceFormPage.fillField('currentLicenceYear', '1'))
            .then(() => carInsuranceFormPage.fillField('currentLicenseMonth', '0'))
            .then(() => carInsuranceFormPage.selectRadioButton('anyMedicalConditions'))
            .then(() => carInsuranceFormPage.selectRadioButton('anyOtherCars'))
            .then(() => carInsuranceFormPage.selectRadioButton('anyConvictions'))
            .then(() => carInsuranceFormPage.selectRadioButton('hasInsuranceEverBeenDeclined'))
            .then(() => browser.sleep(3000))
            .then(() => carInsuranceFormPage.clickElement('continueButton'))
            .then(() => browser.quit())
    })
})
