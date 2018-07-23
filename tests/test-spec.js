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
    afterEach(() => {
        return browser.quit()
    })
    xit('Fill car insurance form and click continue button', () => {
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
    })

    xit('Calculate savings', () => {
        return homePage
            .goToPage()
            .then(() => homePage.clickElement('moneyMadeEasyLink'))
            .then(() => expect(moneyMadeEasyPage.getUrl()).toContain('money-made-easy'))
            .then(() => moneyMadeEasyPage.clickToolsAndCalc())
            .then(() => expect(resoursesHubPage.getUrl()).toContain('resources'))
            .then(() => resoursesHubPage.clickSavingsCalc())
            .then(() => expect(savingsCalcPage.getUrl()).toContain('calculator'))
            .then(() => savingsCalcPage.selectRadioButtonBySpace('saveEachMonthRadioButton'))
            .then(() => savingsCalcPage.fillField('amountField', 500))
            .then(() => savingsCalcPage.fillField('existingSavingsField', 300))
            .then(() => savingsCalcPage.fillField('grossInterestRateField', 90))
            .then(() => savingsCalcPage.clickElement('calcMySavingsButton'))
            .then(() => browser.sleep(3000))
            .then(() =>
                expect(savingsCalcPage.isElementVisible('saveEachMonthResults')).toBeTruthy(),
            )
    })

    it('Leave feedback on Gas and Electricity Page', () => {
        return homePage
            .goToPage()
            .then(() => homePage.mouseMoveToElement('energy'))
            .then(() => homePage.mouseMoveToElement('solarPowerLink'))
            .then(() => homePage.clickElement('solarPowerLink'))
            .then(() => gasAndElectricityPage.wait(1000))
            .then(() => expect(browser.getCurrentUrl()).toContain('solar-power'))
            .then(() => solarPowerPage.clickElement('switchAndSaveNowButton'))
            .then(() => expect(browser.getCurrentUrl()).toContain('enquiry'))
            .then(() => gasAndElectricityPage.wait(1000))
            .then(() => gasAndElectricityPage.clickElement('feedbackButton'))
            .then(() => gasAndElectricityPage.wait(3000))
            .then(() => gasAndElectricityPage.switchToIframe())
            .then(() => gasAndElectricityPage.clickElement('generalFeedback'))
            .then(() => gasAndElectricityPage.wait(3000))
            .then(() => gasAndElectricityPage.switchToDefaultContent())
            .then(() => gasAndElectricityPage.switchToIframe())
            .then(() => gasAndElectricityPage.clickElement('likeRadioButton'))
            .then(() => gasAndElectricityPage.fillField('feedbackTextField', 'LIKE'))
            .then(() => gasAndElectricityPage.clickElement('submitButton'))
            .then(() => gasAndElectricityPage.wait(3000))
            .then(() => expect(gasAndElectricityPage.isElementVisible('successForm')).toBeTruthy())
            .then(() => gasAndElectricityPage.switchToDefaultContent())
    })
})
