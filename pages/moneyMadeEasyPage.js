const Page = require('./page')
class MoneyMadeEasyPage extends Page {
    constructor() {
        super()
        this.url = 'https://www.moneysupermarket.com/money-made-easy'
        const menuNav = element.all(By.css('.msm-menu__nav-sub-link'))
        this.data = {
            toolsAndCalc: this.selectElementByText(menuNav, 'Tools & Calculators'),
        }
    }
}
module.exports = MoneyMadeEasyPage
