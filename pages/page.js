class Page {
    constructor() {}
    getUrl() {
        return browser.getCurrentUrl()
    }
    goToPage() {
        return browser.get(this.url)
    }
    isElementVisible(name) {
        return this.data[name].isDisplayed()
    }

    selectElementByText(listOfElements, text) {
        return this.data[listOfElements]
            .filter(el => {
                return el.getText().then(elemText => {
                    console.log(elemText)
                    return elemText
                        .toLowerCase()
                        .trim()
                        .includes(text.toLowerCase())
                })
            })
            .first()
    }

    clickElementByLocate(locate) {
        return browser.findElement(locate).then(element => element.click())
    }

    clickElement(element) {
        return this.data[element].click()
    }

    fillField(locate, value, key = protractor.Key.ENTER) {
        return this.data[locate].sendKeys(value)
    }

    mouseMoveToElement(element) {
        return browser
            .actions()
            .mouseMove(this.data[element])
            .perform()
    }

    selectRadioButton(element) {
        return this.data[element].sendKeys(protractor.Key.ENTER)
    }

    selectRadioButtonBySpace(element) {
        return this.data[element].sendKeys(protractor.Key.SPACE)
    }

    wait(timeout) {
        return browser.wait(() => false, timeout).catch(() => {})
    }
}
module.exports = Page
