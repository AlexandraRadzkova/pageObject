const Page = require('./page')
class ResoursesHubPage extends Page {
    constructor() {
        super()
        this.url = 'https://www.moneysupermarket.com/money-made-easy/resources'
        const mainArticles = element.all(By.css('.msm-article-hero__link'))
        this.data = {
            savingsCalc: this.selectElementByText(mainArticles, 'Savings calculator'),
        }
    }
}
module.exports = ResoursesHubPage
