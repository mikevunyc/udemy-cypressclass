class OrderConfirmationPage {
    verifyOrderSuccess() {
        cy.get('.hero-primary').should('have.text', ' Thankyou for the order. ')
    }
    goToOrders() {
        cy.get(':nth-child(3) > .btn').click()
        cy.get('h1.ng-star-inserted').click()
    }
    verifyOrdersPage() {
        cy.get('h1.ng-star-inserted').should('have.text', 'Your Orders')
    }
}
export default OrderConfirmationPage