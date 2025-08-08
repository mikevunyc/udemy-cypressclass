describe('My Second test', function() 
{

  it('Does not do much!', function() {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    //Parent child chaining
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        const textVeg=$el.find('h4.product-name').text()
        if (textVeg.includes('Cashews')) {
            cy.wrap($el).find('button').click()
        } 
    })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click()
    cy.get('label').should('have.text',"Choose Country")

  })

})