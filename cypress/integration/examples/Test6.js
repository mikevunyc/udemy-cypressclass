describe('Handling mouseover events', () => 
  {
    it('should handle hidden elements', () =>
    {
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include','top')
    })

  });

