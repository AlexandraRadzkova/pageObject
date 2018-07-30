const { pages } = require('../helpers/helpers')

describe('test', () => {
    const EC = protractor.ExpectedConditions
    const isCurrentLicenceMonthVisible = EC.visibilityOf(
        pages.carInsuranceForm.data['currentLicenceMonth'],
    )
    const isFeedbackButtonVisible = EC.visibilityOf(pages.gasAndElectricity.data['feedbackButton'])
    const isIframeVisible = EC.visibilityOf(pages.gasAndElectricity.data['iframeRoot'])

    fit('Fill car insurance form and click continue button', () => {
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
            .then(() =>
                pages.carInsuranceForm.fillField(
                    'address',
                    'Insure, 384, Clapham Road, London, SW99AR',
                ),
            )
            .then(() => pages.carInsuranceForm.fillField('dateField', '29'))
            .then(() => pages.carInsuranceForm.fillField('monthField', '05'))
            .then(() => pages.carInsuranceForm.fillField('yearField', '1998'))
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
            .then(() => expect(pages.aboutTheCar.getUrl()).toContain('aboutthecar'))
    })

    it('Calculate savings', () => {
        return pages.home
            .goToPage()
            .then(() => pages.home.clickElement('moneyMadeEasyLink'))
            .then(() => expect(pages.moneyMadeEasy.getUrl()).toContain('money-made-easy'))
            .then(() => pages.moneyMadeEasy.clickElement('toolsAndCalc'))
            .then(() => expect(pages.resoursesHub.getUrl()).toContain('resources'))
            .then(() => pages.resoursesHub.clickElement('savingsCalc'))
            .then(() => expect(pages.savingsCalc.getUrl()).toContain('calculator'))
            .then(() => pages.savingsCalc.selectRadioButtonBySpace('saveEachMonthRadioButton'))
            .then(() => pages.savingsCalc.fillField('amountField', 500))
            .then(() => pages.savingsCalc.fillField('existingSavingsField', 300))
            .then(() => pages.savingsCalc.fillField('grossInterestRateField', 90))
            .then(() => pages.savingsCalc.clickElement('calcMySavingsButton'))
            .then(() =>
                expect(pages.savingsCalc.isElementVisible('saveEachMonthResults')).toBeTruthy(),
            )
    })

    it('Leave feedback on Gas and Electricity Page', () => {
        return pages.home
            .goToPage()
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
            .then(() => pages.gasAndElectricity.fillField('feedbackTextField', 'LIKE'))
            .then(() => pages.gasAndElectricity.clickElement('submitButton'))
            .then(() =>
                expect(pages.gasAndElectricity.isElementVisible('successForm')).toBeTruthy(),
            )
            .then(() => pages.gasAndElectricity.switchToDefaultContent())
    })
})
