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
        const elements =
            typeof listOfElements === 'string' ? this.data[listOfElements] : listOfElements

        return elements
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

    clickElement(element) {
        if (typeof element === 'string') {
            return this.data[element].click()
        } else return element.click()
    }

    fillField(locate, value) {
        return this.data[locate].sendKeys(value).sendKeys(protractor.Key.ENTER)
    }

    mouseMoveToElement(element) {
        return browser
            .actions()
            .mouseMove(this.data[element])
            .perform()
    }

    selectRadioButtonByEnter(element) {
        return this.data[element].sendKeys(protractor.Key.ENTER)
    }

    selectRadioButtonBySpace(element) {
        return this.data[element].sendKeys(protractor.Key.SPACE)
    }

    selectDropdownValueByText(dropdown, text) {
        return this.data[dropdown].element(by.xpath('option[.="' + text + '"]')).click()
    }

    selectDropdownValueByPartialText(dropdown, partialText) {
        return this.data[dropdown].element(by.cssContainingText('option', partialText)).click()
    }

    wait(timeout) {
        return browser.wait(() => false, timeout).catch(() => {})
    }

    waitForEC(EC, timeout) {
        return browser.wait(EC, timeout).catch(() => {})
    }
}
module.exports = Page
