import ConfirmationPage from "./ConfirmationPage"

class CartPage {
    checkoutItems() {
        cy.contains('button', 'Checkout').click()
        return new ConfirmationPage()
    }

    sumOfProducts() {
        let sum = 0
        return cy.get('tr td:nth-child(4) strong')
            .each($e1 => {
                const amount = Number($e1.text().split(" ")[1].trim())
                sum = sum + amount
            }).then(function () {
                return sum
            })
    }
}
export default CartPage;