const HomePage = require('../../pages/HomePage')
const CarInsurancePage = require('../../pages/carInsurancePage')
const CarInsuranceFormPage = require('../../pages/carInsuranceFormPage')
const SolarPowerPage = require('../../pages/solarPowerPage')
const GasAndElectricityPage = require('../../pages/gasAndElectricityPage')
const MoneyMadeEasyPage = require('../../pages/moneyMadeEasyPage')
const ResoursesHubPage = require('../../pages/resoursesHubPage')
const SavingsCalcPage = require('../../pages/savingsCalcPage')

const homePage = new HomePage()
const carInsurancePage = new CarInsurancePage()
const carInsuranceFormPage = new CarInsuranceFormPage()
const solarPowerPage = new SolarPowerPage()
const gasAndElectricityPage = new GasAndElectricityPage()
const moneyMadeEasyPage = new MoneyMadeEasyPage()
const resoursesHubPage = new ResoursesHubPage()
const savingsCalcPage = new SavingsCalcPage()

describe('test', () => {
    const EC = protractor.ExpectedConditions
    const isInsureAddressDropdownVisible = EC.visibilityOf(
        carInsuranceFormPage.data['insureAddressDropdown'],
    )
    const isCurrentLicenceMonthVisible = EC.visibilityOf(
        carInsuranceFormPage.data['currentLicenceMonth'],
    )
    const isFeedbackButtonVisible = EC.visibilityOf(gasAndElectricityPage.data['feedbackButton'])
    const isIframeVisible = EC.visibilityOf(gasAndElectricityPage.data['iframeRoot'])

    it('Fill car insurance form and click continue button', () => {
        return homePage
            .goToPage()
            .then(() => homePage.clickElement('carInsuranceButton'))
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
            .then(() => carInsuranceFormPage.waitForEC(isInsureAddressDropdownVisible, 5000))
            .then(() =>
                carInsuranceFormPage.selectDropdownValueByPartialText(
                    'insureAddressDropdown',
                    'Insuresupermarket.com',
                ),
            )
            .then(() => carInsuranceFormPage.fillField('dateField', '29'))
            .then(() => carInsuranceFormPage.fillField('monthField', '05'))
            .then(() => carInsuranceFormPage.fillField('yearField', '1998'))
            .then(() => carInsuranceFormPage.clickElement('kindOfDrivenLicense'))
            .then(() => carInsuranceFormPage.clickElement('restrictionLast'))
            .then(() => carInsuranceFormPage.selectDropdownValueByText('currentLicenceYear', '1'))
            .then(() => carInsuranceFormPage.waitForEC(isCurrentLicenceMonthVisible, 5000))
            .then(() => carInsuranceFormPage.selectDropdownValueByText('currentLicenceMonth', '5'))
            .then(() => carInsuranceFormPage.clickElement('anyMedicalConditionsNo'))
            .then(() => carInsuranceFormPage.clickElement('anyOtherCarsNo'))
            .then(() => carInsuranceFormPage.clickElement('hasOffencesNo'))
            .then(() => carInsuranceFormPage.clickElement('anyConvictionsNo'))
            .then(() => carInsuranceFormPage.clickElement('hasInsuranceEverBeenDeclinedYes'))
            .then(() =>
                carInsuranceFormPage.selectDropdownValueByText('yearsOfNoClaimsDiscount', '1'),
            )
            .then(() =>
                carInsuranceFormPage.selectDropdownValueByPartialText(
                    'startInsuranceDate',
                    'Today',
                ),
            )
            .then(() => carInsuranceFormPage.clickElement('continueButton'))
            .then(() => expect(browser.getCurrentUrl()).toContain('aboutthecar'))
    })

    it('Calculate savings', () => {
        return homePage
            .goToPage()
            .then(() => homePage.clickElement('moneyMadeEasyLink'))
            .then(() => expect(moneyMadeEasyPage.getUrl()).toContain('money-made-easy'))
            .then(() => moneyMadeEasyPage.clickElement('toolsAndCalc'))
            .then(() => expect(resoursesHubPage.getUrl()).toContain('resources'))
            .then(() => resoursesHubPage.clickElement('savingsCalc'))
            .then(() => expect(savingsCalcPage.getUrl()).toContain('calculator'))
            .then(() => savingsCalcPage.selectRadioButtonBySpace('saveEachMonthRadioButton'))
            .then(() => savingsCalcPage.fillField('amountField', 500))
            .then(() => savingsCalcPage.fillField('existingSavingsField', 300))
            .then(() => savingsCalcPage.fillField('grossInterestRateField', 90))
            .then(() => savingsCalcPage.clickElement('calcMySavingsButton'))
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
            .then(() => solarPowerPage.clickElement('switchAndSaveNowButton'))
            .then(() => gasAndElectricityPage.waitForEC(isFeedbackButtonVisible, 5000))
            .then(() => gasAndElectricityPage.clickElement('feedbackButton'))
            .then(() => gasAndElectricityPage.waitForEC(isIframeVisible, 5000))
            .then(() => gasAndElectricityPage.switchToIframe())
            .then(() => gasAndElectricityPage.clickElement('generalFeedback'))
            .then(() => gasAndElectricityPage.switchToDefaultContent())
            .then(() => gasAndElectricityPage.switchToIframe())
            .then(() => gasAndElectricityPage.clickElement('likeRadioButton'))
            .then(() => gasAndElectricityPage.fillField('feedbackTextField', 'LIKE'))
            .then(() => gasAndElectricityPage.clickElement('submitButton'))
            .then(() => expect(gasAndElectricityPage.isElementVisible('successForm')).toBeTruthy())
            .then(() => gasAndElectricityPage.switchToDefaultContent())
    })
})
