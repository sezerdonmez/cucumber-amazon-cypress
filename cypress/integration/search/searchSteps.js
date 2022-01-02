import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

// var search = require ('./fixtures/search.json')

Given ('I open home page', () => {
    cy.visitUrlTitleInclude('/', 'Amazon.com.tr')
})

When ('I type {string} to search input', keyword => {
    cy.typeToElement('[id="twotabsearchtextbox"]', keyword)
})

When ('I choose {string} category on dropdown box', category => {
    cy.chooseCategoryFromDropdownBox('[id="searchDropdownBox"]', category)
})

And ('I accept cookies', () => {
    cy.clickElement('[id="sp-cc-accept"]')
    cy.shouldNotExist('.sp-cc-text')
})

And ('I click on find button for {string} search', keyword => {
    cy.clickElement('[id="nav-search-submit-button"]')
    cy.checkTitleInclude(keyword)
})

And ('I press {string} key from keyboard', key => {
    var keyLower = key.toLowerCase()
    cy.pressKey('[id="twotabsearchtextbox"]', keyLower)
})

And ('I click keyword search in category page from auto complete suggestions', () => {
    cy.clickChildElementWithText('.s-suggestion', 'span', 'şunun içinde:')
})

Then ('I should see that the search result page for {string}', keyword => {
    cy.checkIfElementContainsText('.a-color-state', keyword)
})

Then ('I should see that the {string} category page for {string} keyword', (category, keyword) => {
    cy.checkIfElementContainsText('.a-color-state', keyword)
    cy.checkDropdownBoxSelected('[id="searchDropdownBox"]', category)
})

Then ('I should see that the {string} category page', category => {
    cy.checkIfElementContainsText('.fst-h1-st h1', category)
    cy.checkDropdownBoxSelected('[id="searchDropdownBox"]', category)
})



