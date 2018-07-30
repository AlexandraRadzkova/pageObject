const Page = require('./page')
class CarInsuranceFormPage extends Page {
    constructor() {
        super()
        this.url =
            'https://www.moneysupermarket.com/shop/car-insurance/questionset/501-2/#?step=highimpactquestions'

        this.data = {
            carRegistrationYear: element(By.className('car-registration__input')),
            address: element(By.css('#propertyAddress')),
            findCarButton: element(By.className('btn btn-find')),
            date: element(By.name('policyHolder.dateOfBirth.day')),
            month: element(By.name('policyHolder.dateOfBirth.month')),
            year: element(By.name('policyHolder.dateOfBirth.year')),
            kindOfDrivenLicense: element(By.xpath('//label[text() = "Medically restricted"]')),
            currentLicenceYear: element(
                By.css('.year-month-selector__year-select .nativedropdown-wrapper__native'),
            ),
            currentLicenceMonth: element(
                By.css('.year-month-selector__month-select .nativedropdown-wrapper__native'),
            ),
            restrictionLast: element(By.xpath('//label[text() = "Less than 3 years"]')),
            continueButton: element(
                By.className('btn btn-primary btn-continue btn-continue--alone'),
            ),
            anyMedicalConditionsNo: element(
                By.css('[for = "policyHolder.hasMedicalConditionsAffectingDrivingfalse"]'),
            ),
            anyOtherCarsNo: element(By.css('[for = "policyHolder.drivesAnyOtherCarsfalse"]')),
            anyConvictionsNo: element(
                By.css('[for = "policyHolder.hasNonMotoringConvictionsfalse"]'),
            ),
            hasInsuranceEverBeenDeclinedYes: element(
                By.css('[for = "policyHolder.hasInsuranceEverBeenDeclinedtrue"]'),
            ),
            yearsOfNoClaimsDiscount: element(
                By.css('.policyHolder_numberOfYearsNoClaims .nativedropdown-wrapper__native'),
            ),
            hasOffencesNo: element(
                By.css(
                    '[id="policyHolder.offencesExists"] .toggle-with-confirm__toggle-button--no',
                ),
            ),
            startInsuranceDate: element(By.css('[id="policy.policyStartDate_dropdown"]')),
        }
    }
}
module.exports = CarInsuranceFormPage
