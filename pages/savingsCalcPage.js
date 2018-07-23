const Page = require('./page')
class SavingsCalcPage extends Page {
    constructor() {
        super()
        this.url = 'https://www.moneysupermarket.com/savings/calculator/'
        this.data = {
            saveEachMonthRadioButton: element(By.css('#each-month')),
            amountField: element(By.css('#howmucheachmonth')),
            existingSavingsField: element(By.css('#existingsavingseachmonth')),
            grossInterestRateField: element(By.css('#grossinterestrateeachmonth')),
            calcMySavingsButton: element(By.css("#saveeachmonth [class = 'submit btn']")),
            saveEachMonthResults: element(By.css('#saveeachmonthresults')),
        }
    }
}
module.exports = SavingsCalcPage
