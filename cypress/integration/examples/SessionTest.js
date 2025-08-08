const neatCSV = require('neat-csv')
let productName

describe('JWT Session', function () {
    it('logged in with token', async () => {
        cy.LoginAPI().then(function () {
            cy.visit("https://rahulshettyacademy.com/client", {
                onBeforeLoad: function (window) {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
        cy.get(".card-body b").eq(1).then(function (ele) {
            productName = ele.text()
        })
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get("[routerlink$='/dashboard/cart']").click()
        cy.contains("Checkout").click()
        cy.get("[placeholder*='Select Country']").type("United states")
        cy.get(".ta-results button").each(($e1, index, $list) => {
            if ($e1.text() === " United States") {
                cy.wrap($e1).click()
            }

        })
        cy.get('.action__submit').click()
        cy.wait(3000)
        cy.get(".order-summary button").click()
        Cypress.config("fileServerFolder")
        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_mikevunyc.csv")
            .then(async (text) => {
                const csv = await neatCSV(text)
                console.log(csv)
                const actualProductCSV = csv[0]["Product Name"]
                expect(productName).to.equal(actualProductCSV)

            })
        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_mikevunyc.csv").then(function (text) {
            expect(text).to.include(productName)
        })


    })
})