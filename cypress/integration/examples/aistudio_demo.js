describe('Cypress studio demo', function () {
    it('create new transaction', function () {
        /* ==== Generated with Cypress Studio ==== */

        //below code belongs to the LoginPage
        cy.visit('https://rahulshettyacademy.com/client');
        cy.get('#userEmail').type('mikevunyc@gmail.com');
        cy.get('#userPassword').type('Learning1!');
        cy.get('#login').click();
        //below code belongs to ShoppingPage
        cy.get(':nth-child(1) > .card > .card-body > .w-10').click();
        cy.get(':nth-child(2) > .card > .card-body > .w-10').click();
        cy.get(':nth-child(3) > .card > .card-body > .w-10').click();
        cy.get(':nth-child(4) > .btn').click();
        cy.get('.subtotal > ul > :nth-child(3) > .btn').click();
        cy.get(':nth-child(2) > .btn').should('have.text', 'Apply Coupon');
        cy.get('.form-group > .input').clear('in');
        cy.get('.form-group > .input').type('india');
        cy.get(':nth-child(3) > .ng-star-inserted > .fa').click();
        cy.get('.btnn').click();
        cy.get('.hero-primary').click();
        //below code belongs to OrderConfirmation
        cy.get('.hero-primary').should('have.text', ' Thankyou for the order. ');
        cy.get(':nth-child(3) > .btn').click();
        cy.get('h1.ng-star-inserted').click();
        cy.get('h1.ng-star-inserted').should('have.text', 'Your Orders');
        /* ==== End Cypress Studio ==== */
    });
});