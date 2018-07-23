const Page = require('./page')
class MoneyMadeEasyPage extends Page {
    constructor() {
        super()

        this.url = 'https://www.moneysupermarket.com/money-made-easy/'
        this.data = {
            menuNav: element.all(By.css('.msm-menu__nav-sub-link')),
        }
        this.toolsAndCalc = this.selectElementByText('menuNav', 'Tools & Calculators')
    }
    clickToolsAndCalc() {
        return this.toolsAndCalc.click()
    }
}
module.exports = MoneyMadeEasyPage
