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
            dateField: element(By.name('policyHolder.dateOfBirth.day')),
            monthField: element(By.name('policyHolder.dateOfBirth.month')),
            yearField: element(By.name('policyHolder.dateOfBirth.year')),
            kindOfDrivenLicense: element(By.xpath('//label[text()="Medically restricted"]')),
            currentLicenceField: element(
                By.css('.year-month-selector__year-select .nativedropdown-wrapper__native'),
            ),
        }
    }

    fillField(locate, value, key = protractor.Key.ENTER) {
        return this.data[locate].sendKeys(value)
    }
    clickFindAddressButton() {
        this.data.findAddressButton.click()
    }
    clickRadioButton(locate) {
        this.data[locate].click()
    }
}
module.exports = CarInsuranceFormPage
