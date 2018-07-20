const Page = require('./page')

class SolarPowerPage extends Page {
    constructor() {
        super()
        this.url = 'https://www.moneysupermarket.com/gas-and-electricity/solar-power/'
        this.data = {
            switchAndSaveNowButton: element(
                By.xpath("//div[contains(@class, 'cta-banner')]/a[text()=' Switch & save now ']"),
            ),
            // element(By.xpath("//a[text()=' Switch & save now ']")),
        }
    }
}

module.exports = SolarPowerPage
