const { pages, getCurrentPage } = require('../../../helpers/helpers')
const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const expect = require('chai').expect
const EC = protractor.ExpectedConditions

Given(/^(\S*) page$/, { timeout: 15000 }, function(pageName) {
    return pages[pageName].goToPage()
})

When(/^I click (\S*)$/, { timeout: 15000 }, async function(elementName) {
    const page = await getCurrentPage()
    await page.clickElement(elementName)
})

When(/^I fill (\S*) field with \'(.*)\'$/, async function(fieldName, value) {
    const page = await getCurrentPage()
    await page.fillField(fieldName, value)
})

When(/^I move mouse to (\S*)$/, async function(elementName) {
    const page = await getCurrentPage()
    await page.mouseMoveToElement(elementName)
})

When(/^I select \'(.*)\' from (\S*) dropdown$/, async function(text, dropdown) {
    const page = await getCurrentPage()
    await page.selectDropdownValueByText(dropdown, text)
})

When(/^I select value from (\S*) dropdown which includes \'(.*)\'$/, async function(
    dropdown,
    partText,
) {
    const page = await getCurrentPage()
    await page.selectDropdownValueByPartialText(dropdown, partText)
})

When(/^I wait for (\S*) to be visible$/, async function(elementName) {
    const page = await getCurrentPage()
    const element = page.data[elementName]
    await page.waitForEC(EC.visibilityOf(element), 5000)
})

When(/^I select (\S*) radio button$/, async function(elementName) {
    const page = await getCurrentPage()
    await page.selectRadioButtonBySpace(elementName)
})

When(/^I switch to iframe$/, async function() {
    const page = await getCurrentPage()
    await page.switchToIframe()
})

When(/^I switch to default content$/, async function() {
    const page = await getCurrentPage()
    await page.switchToDefaultContent()
})

Then(/^I should see (\S*)$/, async function(elementName) {
    const page = await getCurrentPage()
    const state = await page.isElementVisible(elementName)
    expect(state).to.equal(true)
})

Then(/^I should see (\S*) page$/, async function(pageName) {
    const page = await getCurrentPage()
    assert.equal(page.url, pages[pageName].url)
})
