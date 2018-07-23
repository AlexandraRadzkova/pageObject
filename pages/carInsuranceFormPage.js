const Page = require('./page')
class CarInsuranceFormPage extends Page {
    constructor() {
        super()
        this.url =
            'https://www.moneysupermarket.com/shop/car-insurance/questionset/#?step=highimpactquestions'

        this.data = {
            carRegistrationYear: element(By.className('car-registration__input')),
            houseNumber: element(By.id('houseNumber')),
            postCode: element(By.name('postcode')),
            findAddressButton: element(By.className('btn btn-find')),
            insureAddressDropdown: element(
                By.css('.address-select .nativedropdown-wrapper__native'),
            ),
            insureAddress: element(
                By.xpath(
                    '//option[text()="Insuresupermarket.com Ltd, Moneysupermarket House, St. Davids Park, Ewloe, Deeside, Clwyd, CH53UZ"]',
                ),
            ),
            dateField: element(By.name('policyHolder.dateOfBirth.day')),
            monthField: element(By.name('policyHolder.dateOfBirth.month')),
            yearField: element(By.name('policyHolder.dateOfBirth.year')),
            kindOfDrivenLicense: element(By.xpath('//label[text()="Medically restricted"]')),
            currentLicenceYear: element(
                By.css('.year-month-selector__year-select .nativedropdown-wrapper__native'),
            ),
            currentLicenceMonth: element(
                By.css('.year-month-selector__month-select .nativedropdown-wrapper__native'),
            ),
            restrictionLast: element(By.xpath('//label[text()="Less than 3 years"]')),
            continueButton: element(
                By.className('btn btn-primary btn-continue btn-continue--alone'),
            ),
            anyMedicalConditionsNo: element(
                By.id('policyHolder.hasMedicalConditionsAffectingDrivingfalse'),
            ),
            anyOtherCarsNo: element(By.id('policyHolder.drivesAnyOtherCarsfalse')),

            anyConvictionsNo: element(By.id('policyHolder.hasNonMotoringConvictionsfalse')),
            hasInsuranceEverBeenDeclinedYes: element(
                By.id('policyHolder.hasInsuranceEverBeenDeclinedtrue'),
            ),
            yearsOfNoClaimsDiscount: element(
                By.css('.policyHolder_numberOfYearsNoClaims .nativedropdown-wrapper__native'),
            ),
            hasOffencesNo: element(
                By.css(
                    '[id="policyHolder.offencesExists"] .toggle-with-confirm__toggle-button--no',
                ),
            ),
        }
    }

    selectStartInsuranceDate() {
        element(by.cssContainingText('option', 'Sunday 29th July')).click()
    }

    //TODO: chooseOptionFromDropdown
}
module.exports = CarInsuranceFormPage
