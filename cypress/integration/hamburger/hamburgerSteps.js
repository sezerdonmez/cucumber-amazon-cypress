import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

// var search = require ("../cypress/fixtures/search.json")

Given ('I open home page', () => {
    cy.visitUrlTitleInclude('/', 'Amazon.com.tr')
})

When ('I click hamburger menu', () => {
    cy.clickElement('#nav-hamburger-menu')
    cy.shouldVisible('#hmenu-customer-name')
})

And ('I click {string} on hamburger menu', text => {
    cy.clickElementWithText('.hmenu-item', text)
})

And ('I click {string} on {string} category menu', (childCategory, mainCategory) => {
    cy.shouldVisible('[aria-label="Back to ana menü"]')
    cy.checkIfElementContainsText('.hmenu-item', mainCategory)
    cy.clickElementWithText('.hmenu-item', childCategory)
})

And ('I accept cookies', () => {
    cy.clickElement('[id="sp-cc-accept"]')
    cy.shouldNotExist('.sp-cc-text')
})

And ('I click {string} button', (showOption) => {
    if (showOption === 'show all') {
        cy.clickElementWithText('.hmenu-item', 'tümünü görüntüle')
    } else {
        cy.clickElementWithText('.hmenu-item', 'daha az görüntüle')
    }
})

Then ('I should see that the {string} page', (pageName) => {
    cy.checkIfElementContainsText('#zg_banner_text', pageName)
})

Then ('I should see that the {string} category page', category => {
    cy.checkIfElementContainsText('.fst-h1-st h1', category)
    cy.checkDropdownBoxSelected('[id="searchDropdownBox"]', category)
})

Then ('I should see that the {string} button', (showOption) => {
    if (showOption === 'show all') {
        cy.checkIfElementContainsText('.hmenu-item', 'tümünü görüntüle')
    } else {
        cy.checkIfElementContainsText('.hmenu-item', 'daha az görüntüle')
    }
})