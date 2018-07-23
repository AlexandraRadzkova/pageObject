const Page = require('./page')
class SavingsCalcPage extends Page {
    constructor() {
        super()
        this.url = 'https://www.moneysupermarket.com/savings/calculator/'
        this.data = {
            certAmountRadioButton: element(By.css('#each-month')),
            amountField: element(By.css('#howmucheachmonth')),
        }
    }
}
module.exports = SavingsCalcPage
