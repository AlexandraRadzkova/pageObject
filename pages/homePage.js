const Page = require('./page')

class HomePage extends Page {
    constructor() {
        super()
        this.url = 'https://www.moneysupermarket.com'
        const heroButtons = element.all(By.css('.flex-container-component__body .hero-button'))
        this.data = {
            logo: element(By.className('page-header__logo-container')),
            topNavigationContainer: element.all(By.className('top-navigation-container')),
            carInsuranceButton: this.selectElementByText(heroButtons, 'Car Insurance'),
            energy: element(By.css('.top-navigation-container>li:nth-child(3)')),
            solarPowerLink: element(
                By.xpath(
                    "//div[contains(@class, 'header-links-section-component__section')]/a[text()='Solar Power']",
                ),
            ),
            moneyMadeEasyLink: element(
                By.xpath(
                    "//div[contains(@class, 'links-section-component__section')]/a[text() = 'Money made easy']",
                ),
            ),
        }
    }
}

module.exports = HomePage
