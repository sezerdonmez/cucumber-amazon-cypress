import { should } from "chai"

Cypress.Commands.add('visitUrlTitleInclude', (url, title) => {
    cy.visit(url)
    cy.title()
        .should('include', title)
})

Cypress.Commands.add('checkTitleInclude', title => {
    cy.title()
        .should('include', title)
})

Cypress.Commands.add('clickElement', (locator) => {
    cy.get(locator)
        .click()
})

Cypress.Commands.add('clickChildElementWithText', (locator, childTag, text) => {
    cy.get(locator)
        .children(childTag)
        .contains(text)
        .should('be.visible')
        .wait(500) // Wait  cause re-rendering
    cy.get(locator)
        .children(childTag)
        .contains(text)
        .click()
})

Cypress.Commands.add('chooseCategoryFromDropdownBox', (locator, category) => {
    cy.get(locator)
        .should('have.value', 'search-alias=aps')
    cy.get(locator)
        .select(category)
    cy.get(locator)
        .should('contain', category)
})

Cypress.Commands.add('checkDropdownBoxSelected', (locator, option) => {
    cy.get(locator)
        .contains(option)
        .should('be.selected')
})

Cypress.Commands.add('typeToElement', (locator, keyword) => {
    cy.get(locator)
        .clear()
    cy.get(locator)
        .should('have.value', '')
    cy.get(locator)
        .type(keyword)
    cy.get(locator)
        .should('have.value', keyword)
})

Cypress.Commands.add('pressKey', (locator, key) => {
    cy.get(locator)
        .type(`{${key}}`)
})

Cypress.Commands.add('checkIfElementContainsText', (locator, text) => {
    cy.get(locator)
        .should('contain', text)
})

Cypress.Commands.add('shouldNotVisible', (locator) => {
    cy.get(locator)
        .should('not.be.visible', locator)
})

Cypress.Commands.add('shouldNotExist', (locator) => {
    cy.get(locator)
        .should('not.be.exist', locator)
})


