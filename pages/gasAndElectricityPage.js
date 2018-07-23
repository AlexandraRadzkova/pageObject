const Page = require('./page')
class GasAndElectricityPage extends Page {
    constructor() {
        super()
        this.url = 'https://www.moneysupermarket.com/store/gas-and-electricity/enquiry/'
        this.data = {
            feedbackButton: element(By.className('usabilla_live_button_container')),
            iframeRoot: element(By.css("[title = 'Usabilla Feedback Form Frame']")),
            generalFeedback: element(By.xpath("//div[contains(@class, 'choice choice_general')]")),
            likeRadioButton: element(By.css('.rating_4')),
            feedbackTextField: element(By.name('feedback')),
            submitButton: element(By.className('submit')),
            successForm: element(By.css('.usabilla_ui_holder')),
        }
    }

    switchToIframe() {
        return browser
            .switchTo()
            .frame(this.data.iframeRoot.getWebElement())
            .then(() => browser.waitForAngularEnabled(false))
    }

    switchToDefaultContent() {
        return browser
            .switchTo()
            .defaultContent()
            .then(() => browser.waitForAngularEnabled(true))
    }
}
module.exports = GasAndElectricityPage
