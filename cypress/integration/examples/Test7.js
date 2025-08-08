/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Handling Child Windows', () => 
  {
    it('Should handle child window', () =>
    {
    
    //jquery remove attribute
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get('#opentab').invoke('removeAttr', 'target').click();
    cy.origin('https://www.qaclickacademy.com/',() => 
      {
    cy.get("#navbarSupportedContent a[href*='about']").click();  
    cy.get(".mt-50 h2").should('contain', 'Welcome to QAClick Academy');

      });
    
    //get property
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#opentab').then(function(el){
      const url=el.prop('href')
      cy.visit(url)
      cy.origin(url, () =>
        {
          cy.get("div.sub-menu-bar a[href*='about']").click()
        })      
      })

    })

  });

