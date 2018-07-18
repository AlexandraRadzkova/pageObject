const Page = require('./page')
class HomePage extends Page {
    constructor() {
        super()
        this.url = 'https://www.moneysupermarket.com'
        this.data = {
            logo: element(By.className('page-header__logo-container')),
            topNavigationContainer: element.all(By.className('top-navigation-container')),
            heroButtons: element.all(By.css('.flex-container-component__body .hero-button')),
        }
    }
}
module.exports = HomePage
