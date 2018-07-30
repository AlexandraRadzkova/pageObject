const HomePage = require('../../pages/homePage')
const CarInsurancePage = require('../../pages/carInsurancePage')
const CarInsuranceFormPage = require('../../pages/carInsuranceFormPage')
const SolarPowerPage = require('../../pages/solarPowerPage')
const GasAndElectricityPage = require('../../pages/gasAndElectricityPage')
const MoneyMadeEasyPage = require('../../pages/moneyMadeEasyPage')
const ResoursesHubPage = require('../../pages/resoursesHubPage')
const SavingsCalcPage = require('../../pages/savingsCalcPage')
const AboutTheCarPage = require('../../pages/aboutTheCarPage')

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

module.exports = { pages, getCurrentPage, lastSymbol, removeLastSymbol }
