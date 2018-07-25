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
    it('Fill car insurance form and click continue button', () => {
        return homePage
            .goToPage()
            .then(() => homePage.clickElement(homePage.carInsuranceButton))
            .then(() => {
                return browser.getCurrentUrl().then(currentUrl => {
                    if (!currentUrl.includes('questionset')) {
                        console.log("doesn't containt questionset")
                        return carInsurancePage.clickElement('getNewQuoteButton')
                    }
                })
            })
            .then(() => carInsuranceFormPage.fillField('carRegistrationYear', '1753'))
            .then(() => carInsuranceFormPage.fillField('houseNumber', '23'))
            .then(() => carInsuranceFormPage.fillField('postCode', 'CH5 3UZ'))
            .then(() => carInsuranceFormPage.clickElement('findAddressButton'))
            .then(() => carInsuranceFormPage.wait(1000))
            .then(() =>
                carInsuranceFormPage.selectValueInCurrentDropdown(
                    'insureAddressDropdown',
                    'Insuresupermarket.com',
                ),
            )
            .then(() => carInsuranceFormPage.fillField('dateField', '29'))
            .then(() => carInsuranceFormPage.fillField('monthField', '05'))
            .then(() => carInsuranceFormPage.fillField('yearField', '1998'))
            .then(() => carInsuranceFormPage.clickElement('kindOfDrivenLicense'))
            .then(() => carInsuranceFormPage.clickElement('restrictionLast'))
            .then(() =>
                carInsuranceFormPage.selectValueInCurrentDropdown('currentLicenceYear', '1'),
            )
            .then(() => carInsuranceFormPage.wait(1000))
            .then(() =>
                carInsuranceFormPage.selectValueInCurrentDropdown('currentLicenceMonth', '5'),
            )
            .then(() => carInsuranceFormPage.selectRadioButton('anyMedicalConditionsNo'))
            .then(() => carInsuranceFormPage.selectRadioButton('anyOtherCarsNo'))
            .then(() => carInsuranceFormPage.selectRadioButton('hasOffencesNo'))
            .then(() => carInsuranceFormPage.selectRadioButton('anyConvictionsNo'))
            .then(() => carInsuranceFormPage.selectRadioButton('hasInsuranceEverBeenDeclinedYes'))
            .then(() => carInsuranceFormPage.fillField('yearsOfNoClaimsDiscount', 1))
            .then(() =>
                carInsuranceFormPage.selectValueInCurrentDropdown(
                    'startInsuranceDate',
                    'Sunday 29th July',
                ),
            )
            .then(() => carInsuranceFormPage.wait(1000))
            .then(() => carInsuranceFormPage.clickElement('continueButton'))
            .then(() => carInsuranceFormPage.wait(2000))
            .then(() => expect(browser.getCurrentUrl()).toContain('aboutthecar'))
    })

    xit('Calculate savings', () => {
        return homePage
            .goToPage()
            .then(() => homePage.clickElement('moneyMadeEasyLink'))
            .then(() => expect(moneyMadeEasyPage.getUrl()).toContain('money-made-easy'))
            .then(() => moneyMadeEasyPage.clickElement(moneyMadeEasyPage.toolsAndCalc))
            .then(() => expect(resoursesHubPage.getUrl()).toContain('resources'))
            .then(() => resoursesHubPage.clickElement(resoursesHubPage.savingsCalc))
            .then(() => expect(savingsCalcPage.getUrl()).toContain('calculator'))
            .then(() => savingsCalcPage.selectRadioButtonBySpace('saveEachMonthRadioButton'))
            .then(() => savingsCalcPage.fillField('amountField', 500))
            .then(() => savingsCalcPage.fillField('existingSavingsField', 300))
            .then(() => savingsCalcPage.fillField('grossInterestRateField', 90))
            .then(() => savingsCalcPage.clickElement('calcMySavingsButton'))
            .then(() => savingsCalcPage.wait(3000))
            .then(() =>
                expect(savingsCalcPage.isElementVisible('saveEachMonthResults')).toBeTruthy(),
            )
    })

    xit('Leave feedback on Gas and Electricity Page', () => {
        return homePage
            .goToPage()
            .then(() => homePage.mouseMoveToElement('energy'))
            .then(() => homePage.mouseMoveToElement('solarPowerLink'))
            .then(() => homePage.clickElement('solarPowerLink'))
            .then(() => solarPowerPage.wait(1000))
            .then(() => expect(solarPowerPage.getUrl()).toContain('solar-power'))
            .then(() => solarPowerPage.clickElement('switchAndSaveNowButton'))
            .then(() => expect(gasAndElectricityPage.getUrl()).toContain('enquiry'))
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
