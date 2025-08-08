import HomePage from "../../support/HomePage"
describe('End to End ecommerce Test', function () {

    before(function () {
        //runs once before all tests in this block
        cy.fixture('example').then(function (data) {
            this.data = data
            this.homePage = new HomePage()
        })
    })

    it('Submit order', function () {
        // https://rahulshettyacademy.com/loginpagePractise/
        const productName = this.data.productName
        this.homePage.goTo(Cypress.env('url') + "/loginpagePractise/#")
        const productPage = this.homePage.login(this.data.username, this.data.password)
        productPage.pageValidation()
        productPage.getCartCount().should('have.length', 4)
        productPage.selectProduct(productName)
        productPage.selectFirstProduct()
        const cartPage = productPage.goToCart()
        cartPage.sumOfProducts().then(function (sum) {
            expect(sum).to.be.lessThan(200000);
        })
        const confirmationPage = cartPage.checkoutItems()
        confirmationPage.submitFormDetails()
        confirmationPage.getAlertMessage().should('contain', 'Success')



    })
})