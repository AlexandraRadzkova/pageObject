const Page = require('./page')
class GasAndElectricityPage extends Page {
    constructor() {
        super()
        this.url = 'https://www.moneysupermarket.com/store/gas-and-electricity/enquiry/'
        this.data = {
            feedbackButton: element(By.className('usabilla_live_button_container')),
            //specificFeedback: element(By.css("#contents [class = 'choice choice_specific']")),
            //iFrame: element(By.title('Usabilla Feedback Form Frame')),
            likeRadioButton: element(By.className('rating_4')),
            feedbackTextField: element(By.name('feedback')),
            submitButton: element(By.className('submit')),
            successPopup: element(By.className('usabilla_ui_holder')),
        }
    }

    // TODO: iFrame
}
module.exports = GasAndElectricityPage
