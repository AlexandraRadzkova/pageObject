const Page = require('./page')
class CarInsurancePage extends Page {
    constructor() {
        super()
        this.url = 'https://www.moneysupermarket.com/car-insurance/?From=SHP-icons'

        this.getNewQuoteButton = element(
            By.xpath("//div[contains(@class, 'landing-donk')]/a[text()=' Get a brand new quote ']"),
        )
    }
    clickGetNewQuoteButton() {
        this.getNewQuoteButton.click()
    }
}
module.exports = CarInsurancePage
