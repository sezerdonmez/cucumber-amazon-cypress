import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
var hamburger = require('../hamburger/hamburger.json')

Given ('I open home page', () => {
    cy.visitUrlTitleInclude('/', hamburger.homepageTitle)
})

When ('I click hamburger menu', () => {
    cy.clickElement(hamburger.hamburgerMenu)
    cy.shouldVisible(hamburger.hamburgerUserName)
})

And ('I click {string} on hamburger menu', text => {
    cy.clickElementWithText(hamburger.hamburgerItemList, text)
})

And ('I click {string} on {string} category menu', (childCategory, mainCategory) => {
    cy.shouldVisible(hamburger.hamburgerBackMainMenu)
    cy.checkIfElementContainsText(hamburger.hamburgerItemList, mainCategory)
    cy.clickElementWithText(hamburger.hamburgerItemList, childCategory)
})

And ('I accept cookies', () => {
    cy.clickElement('[id="sp-cc-accept"]')
    cy.shouldNotExist('.sp-cc-text')
})

And ('I click {string} button', (showOption) => {
    if (showOption === 'show all') {
        cy.clickElementWithText(hamburger.hamburgerItemList, 'tümünü görüntüle')
    } else {
        cy.clickElementWithText(hamburger.hamburgerItemList, 'daha az görüntüle')
    }
})

Then ('I should see that the {string} page', (pageName) => {
    cy.checkIfElementContainsText(hamburger.highlightsHeaderText, pageName)
})

Then ('I should see that the {string} category page', category => {
    cy.checkIfElementContainsText(hamburger.categoryPageHeader, category)
    cy.checkDropdownBoxSelected(hamburger.searchCategoryDropdown, category)
})

Then ('I should see that the {string} button', (showOption) => {
    if (showOption === 'show all') {
        cy.checkIfElementContainsText(hamburger.hamburgerItemList, 'tümünü görüntüle')
    } else {
        cy.checkIfElementContainsText(hamburger.hamburgerItemList, 'daha az görüntüle')
    }
})