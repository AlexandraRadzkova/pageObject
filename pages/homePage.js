const Page = require('./page')
class HomePage extends Page {
    constructor() {
        super()
        this.url = 'https://www.moneysupermarket.com'
        this.data = {
            logo: element(By.className('page-header__logo-container')),
            topNavigationContainer: element.all(By.className('top-navigation-container')),
            heroButtons: element.all(By.css('.flex-container-component__body .hero-button')),
            energy: element(By.css('.top-navigation-container>li:nth-child(3)')),
            solarPowerLink: element(By.xpath("//a[contains(text(),'Solar Power')]")),
            moneyMadeEasyLink: element(By.xpath("//a[text() = 'Money Made Easy']")),
        }
        this.carInsuranceButton = this.selectElementByText('heroButtons', 'Car Insurance')
    }
}
module.exports = HomePage
