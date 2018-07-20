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
                return carInsuranceFormPage.fillField('houseNumber', '23')
            })
            .then(() => {
                return carInsuranceFormPage.fillField('postCode', 'CH5 3UZ')
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
                return carInsuranceFormPage.fillField('currentLicenceYear', '1')
            })
            .then(() => browser.sleep(1000))
            .then(() => {
                return carInsuranceFormPage.fillField('currentLicenceMonth', '2')
            })
            .then(() => {
                return carInsuranceFormPage.selectRadioButton('anyMedicalConditionsNo')
            })
            .then(() => {
                return carInsuranceFormPage.selectRadioButton('anyOtherCarsNo')
            })
            .then(() => browser.sleep(1000))
            .then(() => {
                return carInsuranceFormPage.selectRadioButton('hasOffencesNo')
            })
            .then(() => {
                return carInsuranceFormPage.selectRadioButton('anyConvictionsNo')
            })
            .then(() => {
                return carInsuranceFormPage.selectRadioButton('hasInsuranceEverBeenDeclinedYes')
            })
            .then(() => {
                return carInsuranceFormPage.fillField('yearsOfNoClaimsDiscount', 1)
            })
            .then(() => {
                return carInsuranceFormPage.selectStartInsuranceDate()
            })
            .then(() => {
                return browser.sleep(3000)
            })
            .then(() => {
                return carInsuranceFormPage.clickElement('continueButton')
            })
            .then(() => expect(browser.getCurrentUrl()).toContain('aboutthecar'))

        //.then(() => browser.quit())
    })

    // beforeEach(() => {
    //     return homePage.goToPage()
    // })
    xit('test second', () => {
        browser
            .actions()
            .mouseMove(homePage.data['energy'])
            .mouseMove(homePage.data['solarPowerLink'])
            .click()
            .perform()
            .then(() => browser.sleep(1000))
            .then(() => expect(browser.getCurrentUrl()).toContain('solar-power'))
    })
})
