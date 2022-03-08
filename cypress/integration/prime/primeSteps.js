import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
var prime = require('../prime/prime.json')

Given ('I open {string} page', (pageName) => {
    cy.visitUrlTitleInclude(`/${pageName}`, prime.primePageTitle)
})

When ('I hover mouse to {string}', element => {
    if (element === 'carousel card') {
        cy.hoverMouseToElementInList('[class^="a-carousel-card"]', 3, '[class="carousel-card-category-text"]')
    }
})

When ('I choose {string} category on dropdown box', category => {
    cy.chooseCategoryFromDropdownBox('[id="searchDropdownBox"]', category)
})

And ('I accept cookies', () => {
    cy.clickElement('[id="sp-cc-accept"]')
    cy.shouldNotExist('.sp-cc-text')
})

And ('I should see that the {string} on sticky header', element => {
    if (element === 'prime logo') {
        cy.shouldVisible('[id="sticky-nav-prime-logo"]')
    } else {
        cy.shouldVisible('[aria-labelledby="sticky-nav-button-announce"]')
    }
})

And ('I click {string} button for viewing next carousel card', direction => {
    if (direction === 'next') {
        cy.clickElementInList('[class*="a-carousel-goto-nextpage"]', 0)
    } else {
        cy.clickElementInList('[class*="a-carousel-goto-prevpage"]', 0)
    }
})

And ('I click {string} on category deals', text => {
    cy.clickElementWithText('[class="card-title"]', text)
})

But ('I should not see that the {string} carousel card', elementText => {
    cy.shouldNotVisibleWithText(elementText)
})

Then ('I should see that the prime sticky header', () => {
    cy.shouldVisible('[id="sticky-nav-header"]')
})

Then ('I should see that the  {string} carousel card', elementText => {
    cy.shouldVisibleWithText(elementText)
})