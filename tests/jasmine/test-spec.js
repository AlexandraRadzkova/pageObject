const { pages, getCurrentPage } = require('../helpers/helpers')

describe('test', () => {
    const EC = protractor.ExpectedConditions
    const isCurrentLicenceMonthVisible = EC.visibilityOf(
        pages.carInsuranceForm.data['currentLicenceMonth'],
    )
    const isInsureAddressDropdownVisible = EC.visibilityOf(
        pages.carInsuranceForm.data['insureAddress'],
    )
    const isFeedbackButtonVisible = EC.visibilityOf(pages.gasAndElectricity.data['feedbackButton'])
    const isIframeVisible = EC.visibilityOf(pages.gasAndElectricity.data['iframeRoot'])

    xit('Fill car insurance form and click continue button', () => {
        return pages.home
            .goToPage()
            .then(() => pages.home.clickElement('carInsuranceButton'))
            .then(() => {
                return browser.getCurrentUrl().then(currentUrl => {
                    if (!currentUrl.includes('questionset')) {
                        console.log("doesn't containt questionset")
                        return pages.carInsurance.clickElement('getNewQuoteButton')
                    }
                })
            })
            .then(() => pages.carInsuranceForm.fillField('carRegistrationYear', '1753'))
            .then(() => pages.carInsuranceForm.fillField('houseNumber', '23'))
            .then(() => pages.carInsuranceForm.fillField('postCode', 'CH5 3UZ'))
            .then(() => pages.carInsuranceForm.clickElement('findAddressButton'))
            .then(() => pages.carInsuranceForm.waitForEC(isInsureAddressDropdownVisible, 5000))
            .then(() =>
                pages.carInsuranceForm.selectDropdownValueByPartialText(
                    'insureAddress',
                    'Insuresupermarket.com',
                ),
            )
            .then(() => pages.carInsuranceForm.fillField('date', '29'))
            .then(() => pages.carInsuranceForm.fillField('month', '05'))
            .then(() => pages.carInsuranceForm.fillField('year', '1998'))
            .then(() => pages.carInsuranceForm.clickElement('kindOfDrivenLicense'))
            .then(() => pages.carInsuranceForm.clickElement('restrictionLast'))
            .then(() => pages.carInsuranceForm.selectDropdownValueByText('currentLicenceYear', '1'))
            .then(() => pages.carInsuranceForm.waitForEC(isCurrentLicenceMonthVisible, 5000))
            .then(() =>
                pages.carInsuranceForm.selectDropdownValueByText('currentLicenceMonth', '5'),
            )
            .then(() => pages.carInsuranceForm.clickElement('anyMedicalConditionsNo'))
            .then(() => pages.carInsuranceForm.clickElement('anyOtherCarsNo'))
            .then(() => pages.carInsuranceForm.clickElement('hasOffencesNo'))
            .then(() => pages.carInsuranceForm.clickElement('anyConvictionsNo'))
            .then(() => pages.carInsuranceForm.clickElement('hasInsuranceEverBeenDeclinedYes'))
            .then(() =>
                pages.carInsuranceForm.selectDropdownValueByText('yearsOfNoClaimsDiscount', '1'),
            )
            .then(() =>
                pages.carInsuranceForm.selectDropdownValueByPartialText(
                    'startInsuranceDate',
                    'Today',
                ),
            )
            .then(() => pages.carInsuranceForm.clickElement('continueButton'))
            .then(() => getCurrentPage())
            .then(page => expect(page.url).toEqual(pages.aboutTheCar.url))
    })

    it('Calculate savings', () => {
        return pages.home
            .goToPage()
            .then(() => pages.home.clickElement('moneyMadeEasyLink'))
            .then(() => expect(pages.moneyMadeEasy.getUrl()).toContain('money-made-easy'))
            .then(() => pages.moneyMadeEasy.clickElement('toolsAndCalc'))
            .then(() => expect(pages.resoursesHub.getUrl()).toContain('resources'))
            .then(() => pages.resoursesHub.clickElement('savingsCalc'))
            .then(() => pages.savingsCalc.waitForEC(EC.urlContains('calculator'), 5000))
            .then(() => pages.savingsCalc.clickElement('saveEachMonthRadioButton'))
            .then(() => pages.savingsCalc.fillField('amount', 500))
            .then(() => pages.savingsCalc.fillField('existingSavings', 300))
            .then(() => pages.savingsCalc.fillField('grossInterestRate', 90))
            .then(() => pages.savingsCalc.clickElement('calcMySavingsButton'))
            .then(() =>
                expect(pages.savingsCalc.isElementVisible('saveEachMonthResults')).toBeTruthy(),
            )
    })

    it('Leave feedback on Gas and Electricity Page', () => {
        return pages.home
            .goToPage()
            .then(() => console.log('JASMINE BUILD STARTED !!!!'))
            .then(() => console.log('HELLO FROM JENKINS !!!!'))
            .then(() => console.log('HELLO FROM JENKINS ONE MORE TIME!!!!'))
            .then(() => pages.home.mouseMoveToElement('energy'))
            .then(() => pages.home.mouseMoveToElement('solarPowerLink'))
            .then(() => pages.home.clickElement('solarPowerLink'))
            .then(() => pages.solarPower.clickElement('switchAndSaveNowButton'))
            .then(() => pages.gasAndElectricity.waitForEC(isFeedbackButtonVisible, 5000))
            .then(() => pages.gasAndElectricity.clickElement('feedbackButton'))
            .then(() => pages.gasAndElectricity.waitForEC(isIframeVisible, 5000))
            .then(() => pages.gasAndElectricity.switchToIframe())
            .then(() => pages.gasAndElectricity.clickElement('generalFeedback'))
            .then(() => pages.gasAndElectricity.switchToDefaultContent())
            .then(() => pages.gasAndElectricity.switchToIframe())
            .then(() => pages.gasAndElectricity.clickElement('likeRadioButton'))
            .then(() => pages.gasAndElectricity.fillField('feedbackText', 'LIKE'))
            .then(() => pages.gasAndElectricity.clickElement('submitButton'))
            .then(() =>
                expect(pages.gasAndElectricity.isElementVisible('successForm')).toBeTruthy(),
            )
            .then(() => pages.gasAndElectricity.switchToDefaultContent())
    })
})
