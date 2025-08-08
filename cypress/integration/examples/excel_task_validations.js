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
        cy.get(".order-summary button").contains("Excel").click()
        const filePath = Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_mikevunyc.xsl"
        cy.task('excelToJsonConverter', filePath).then(function (result) {
            cy.log(result.data[1].A)
            expect(productName).to.equal(result.data[1].B)
        })
        cy.readFile(filePath).then(function(text){
            expect(text).to.include(productName)
        })
    });
    //Browser(Engine)  - JS code -> Client Side Environment (Front end) - Cypress

    //Node (Engine) - JS code -> Back End applications/Environment
    //Accessing files - filesystem, Database access

    //Task -(Files, DB) -> Config.js, (ExcelToJson) -> cy.task(ExcelToJson)
})