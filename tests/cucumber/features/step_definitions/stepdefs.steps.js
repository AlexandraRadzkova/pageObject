const { pages, getCurrentPage, lastSymbol, removeLastSymbol } = require('../../../helpers/helpers')
const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const expect = require('chai').expect
const EC = protractor.ExpectedConditions

Given(/^(\S*) page$/, { timeout: 15000 }, function(pageName) {
    return pages[pageName].goToPage()
})

When(/^I click (\S*)$/, { timeout: 15000 }, function(elementName) {
    return getCurrentPage().then(page => page.clickElement(elementName))
})

When(/^I fill (\S*) field with \'(.*)\'$/, function(fieldName, value) {
    return getCurrentPage().then(page => page.fillField(fieldName, value))
})

When(/^I move mouse to (\S*)$/, function(elementName) {
    return getCurrentPage().then(page => page.mouseMoveToElement(elementName))
})

When(/^I select \'(.*)\' from (\S*) dropdown$/, function(text, dropdown) {
    return getCurrentPage().then(page => page.selectDropdownValueByText(dropdown, text))
})

When(/^I select value from (\S*) dropdown which includes \'(.*)\'$/, function(dropdown, partText) {
    return getCurrentPage().then(page => page.selectDropdownValueByPartialText(dropdown, partText))
})

When(/^I wait for (\S*) to be visible$/, function(elementName) {
    return getCurrentPage().then(page => {
        const element = page.data[elementName]
        return page.waitForEC(EC.visibilityOf(element), 5000)
    })
})

When(/^I select (\S*) radio button$/, function(elementName) {
    return getCurrentPage().then(page => page.selectRadioButtonBySpace(elementName))
})

When(/^I switch to iframe$/, function() {
    return getCurrentPage().then(page => page.switchToIframe())
})

When(/^I switch to default content$/, function() {
    return getCurrentPage().then(page => page.switchToDefaultContent())
})

Then(/^I should see (\S*)$/, async function(elementName) {
    const page = await getCurrentPage()
    const state = await page.isElementVisible(elementName)
    expect(state).to.equal(true)
})

Then(/^I should see (\S*) page$/, async function(pageName) {
    return getCurrentPage().then(page => {
        assert.equal(page.url, pages[pageName].url)
    })
})
