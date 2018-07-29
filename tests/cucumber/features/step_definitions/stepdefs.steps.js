const HomePage = require('../../../../pages/homePage')
const CarInsurancePage = require('../../../../pages/carInsurancePage')
const CarInsuranceFormPage = require('../../../../pages/carInsuranceFormPage')
const SolarPowerPage = require('../../../../pages/solarPowerPage')
const GasAndElectricityPage = require('../../../../pages/gasAndElectricityPage')
const MoneyMadeEasyPage = require('../../../../pages/moneyMadeEasyPage')
const ResoursesHubPage = require('../../../../pages/resoursesHubPage')
const SavingsCalcPage = require('../../../../pages/savingsCalcPage')
const AboutTheCarPage = require('../../../../pages/aboutTheCarPage')

const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const EC = protractor.ExpectedConditions

const pages = {
	home: new HomePage(),
	carInsurance: new CarInsurancePage(),
	carInsuranceForm: new CarInsuranceFormPage(),
	solarPower: new SolarPowerPage(),
	gasAndElectricity: new GasAndElectricityPage(),
	moneyMadeEasy: new MoneyMadeEasyPage(),
	resoursesHub: new ResoursesHubPage(),
	savingsCalc: new SavingsCalcPage(),
	aboutTheCar: new AboutTheCarPage(),
}

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

Then(/^I should see (\S*) page$/, async function(pageName) {
	return getCurrentPage().then(page => {
		assert.equal(page.url, pages[pageName].url)
	})
})

async function getCurrentPage() {
	const rawCurrentUrl = await browser.getCurrentUrl()
	const currentUrl =
		lastSymbol(rawCurrentUrl) === '/' ? removeLastSymbol(rawCurrentUrl) : rawCurrentUrl
	return Object.values(pages).find(page => page.url === currentUrl)
}

function lastSymbol(string) {
	return string[string.length - 1]
}

function removeLastSymbol(string) {
	return string.slice(0, string.length - 1)
}
