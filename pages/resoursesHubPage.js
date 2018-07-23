const Page = require('./page')
class ResoursesHubPage extends Page {
    constructor() {
        super()
        this.url = 'https://www.moneysupermarket.com/money-made-easy/resources/'
        this.data = {
            mainArticles: element.all(By.css('.msm-article-hero__link')),
        }
        this.savingsCalc = this.selectElementByText('mainArticles', 'Savings calculator')
    }
    clickSavingsCalc() {
        return this.savingsCalc.click()
    }
}
module.exports = ResoursesHubPage
