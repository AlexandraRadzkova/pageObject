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

    selectElement(allList, string) {
        return this.data[allList]
            .filter(el => {
                return el.getText().then(text => {
                    console.log(text)
                    return text
                        .toLowerCase()
                        .trim()
                        .includes(string.toLowerCase())
                })
            })
            .first()
    }
}
module.exports = HomePage
