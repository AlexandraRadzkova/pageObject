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

    selectElementByText(listOfElements, string) {
        return this.data[listOfElements]
            .filter(el => {
                return el.getText().then(text => {
                    console.log(text)
                    return text
                        .toLowerCase()
                        .trim()
                        .includes(string.toLowerCase())
                })
            })
            .first()
    }

    clickElem(name) {
        return browser.findElement(name).then(element => element.click())
    }

    // clickElement(listOfElements, name) {
    //     return this.data[listOfElements]
    //         .filter(el => {
    //             return el.getText().then(text => {
    //                 console.log(text)
    //                 return text
    //                     .toLowerCase()
    //                     .trim()
    //                     .includes(name.toLowerCase())
    //             })
    //         })
    //         .first()
    //         .click()
    // }

    clickElement(listOfElements, name) {
        return this.selectElementByText(listOfElements, name).click()
    }

    fillField(name, value, key = protractor.Key.ENTER) {
        return browser.findElement(name).then(element => element.sendKeys(value))
    }

    wait(timeout) {
        return browser.wait(() => false, timeout).catch(() => {})
    }

    isUrlContaintText(substring) {
        return browser.getCurrentUrl().toContain(substring)
    }
}
module.exports = Page
