const HomePage = require('../pages/HomePage')
const CarInsurancePage = require('../pages/carInsurancePage')
const CarInsuranceFormPage = require('../pages/carInsuranceFormPage')
const SolarPowerPage = require('../pages/solarPowerPage')
const GasAndElectricityPage = require('../pages/gasAndElectricityPage')
const MoneyMadeEasyPage = require('../pages/moneyMadeEasyPage')
const ResoursesHubPage = require('../pages/resoursesHubPage')
const SavingsCalcPage = require('../pages/savingsCalcPage')

const homePage = new HomePage()
const carInsurancePage = new CarInsurancePage()
const carInsuranceFormPage = new CarInsuranceFormPage()
const solarPowerPage = new SolarPowerPage()
const gasAndElectricityPage = new GasAndElectricityPage()
const moneyMadeEasyPage = new MoneyMadeEasyPage()
const resoursesHubPage = new ResoursesHubPage()
const savingsCalcPage = new SavingsCalcPage()

describe('test', () => {
    xit('fill car insurance form', () => {
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

    it('Calculate savings', () => {
        return homePage
            .goToPage()
            .then(() => {
                return homePage.clickElement('moneyMadeEasyLink')
            })
            .then(() => {
                return browser.sleep(1000)
            })
            .then(() => expect(browser.getCurrentUrl()).toContain('money-made-easy'))
            .then(() => {
                return moneyMadeEasyPage.clickToolsAndCalc()
            })
            .then(() => {
                return resoursesHubPage.clickSavingsCalc()
            })
            .then(() => expect(browser.getCurrentUrl()).toContain('calculator'))
            .then(() => {
                return browser.sleep(3000)
            })
            .then(() => {
                return savingsCalcPage.selectRadioButtonBySpace('certAmountRadioButton')
            })
            .then(() => {
                return browser.sleep(3000)
            })
            .then(() => {
                savingsCalcPage.fillField('amountField', 500)
            })
    })

    xit('test second', () => {
        return homePage
            .goToPage()
            .then(() => {
                return homePage.mouseMoveToElement('energy')
            })
            .then(() => {
                return homePage.mouseMoveToElement('solarPowerLink')
            })
            .then(() => {
                return homePage.clickElement('solarPowerLink')
            })
            .then(() => browser.sleep(1000))
            .then(() => expect(browser.getCurrentUrl()).toContain('solar-power'))
            .then(() => {
                return solarPowerPage.clickElement('switchAndSaveNowButton')
            })
            .then(() => expect(browser.getCurrentUrl()).toContain('enquiry'))
            .then(() => {
                return browser.sleep(1000)
            })
            .then(() => {
                return gasAndElectricityPage.clickElement('feedbackButton')
            })
            .then(() => {
                return browser.sleep(3000)
            })
        // .then(() => {
        //     return gasAndElectricityPage.clickElement('specificFeedback')
        // })
        // .then(() => {
        //     return gasAndElectricityPage.clickElement('feedbackButton')
        // })
        // .then(() => {
        //     return gasAndElectricityPage.clickElement('likeRadioButton')
        // })
        // .then(() => {
        //     return gasAndElectricityPage.fillField('feedbackTextField', 'like')
        // })
        // .then(() => {
        //     return gasAndElectricityPage.clickElement('submitButton')
        // })
        // .then(() => {
        //     expect(gasAndElectricityPage.data['successPopup'].isPresent()).toBeTruthy()
        // })
    })
})
