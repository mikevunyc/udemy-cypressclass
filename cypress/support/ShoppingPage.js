class ShoppingPage {
    addProductsToCart(indices) {
        indices.forEach(i => {
            cy.get(`:nth-child(${i}) > .card > .card-body > .w-10`).click()
        })
    }
    checkout() {
        cy.get(':nth-child(4) > .btn').click()
        cy.get('.subtotal > ul > :nth-child(3) > .btn').click()
        cy.get(':nth-child(2) > .btn').should('have.text', 'Apply Coupon')
    }
    applyCoupon(code) {
        cy.get('.form-group > .input').clear()
        cy.get('.form-group > .input').type(code)
        cy.get(':nth-child(3) > .ng-star-inserted > .fa').click()
    }
    placeOrder() {
        cy.get('.btnn').click()
        cy.get('.hero-primary').click()
    }
}
export default ShoppingPage