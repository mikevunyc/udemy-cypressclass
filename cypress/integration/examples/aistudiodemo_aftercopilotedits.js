import LoginPage from "../../support/LoginPage"
import ShoppingPage from "../../support/ShoppingPage"
import OrderConfirmationPage from "../../support/OrderConfirmationPage"

describe('Cypress studio demo', function () {
    it('create new transaction', function () {
        const loginPage = new LoginPage()
        const shoppingPage = new ShoppingPage()
        const orderConfirmationPage = new OrderConfirmationPage()

        loginPage.visit()
        loginPage.login('mikevunyc@gmail.com', 'Learning1!')

        shoppingPage.addProductsToCart([1, 2, 3])
        shoppingPage.checkout()
        shoppingPage.applyCoupon('india')
        shoppingPage.placeOrder()

        orderConfirmationPage.verifyOrderSuccess()
        orderConfirmationPage.goToOrders()
        orderConfirmationPage.verifyOrdersPage()
    })
})