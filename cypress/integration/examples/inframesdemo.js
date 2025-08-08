/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Handling iframes', function () {

  it('Should handle iframes', function () {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.frameLoaded('#courses-iframe');
    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    // cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
    // cy.get('#courses-iframe')
    // .its('0.contentDocument.body') // Access the iframe's document
    // .should('not.be.empty') // Ensure the iframe is loaded
    // .then(cy.wrap) // Wrap the iframe's body so Cypress can interact with it
    // .find("a[href*='mentorship']") // Find the input element inside the iframe
    // .eq(0).click() // Click on button
    // .type('John Doe') // Type the name into the input field
    // cy.get('#courses-iframe')
    // .find("h1[class*='pricing-title']")
    // .should('have.length', 2); // Verify the input value


  })

});

