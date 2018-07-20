const Page = require('./page')
class SolarPowerPage extends Page {
    consctructor() {
        super()
        this.url = 'https://www.moneysupermarket.com/gas-and-electricity/solar-power/'
        this.data = {
            switchAndSaveNowButton: element(By.xpath(
                "//div[contains(@class, 'landing-donk')]/a[text()='  Switch & save now  ']",
            ))
        }
    }
}
