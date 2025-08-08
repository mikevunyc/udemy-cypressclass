describe('API lecture', function () {

    it('external api test', function () {
        cy.request('POST', "http://216.10.246.166/Library/Addbook.php",
            {
                "name": "Vu's RestAssured API test",
                "isbn": "MVU",
                "aisle": "1980001",
                "author": "Michael Vu"
            }
        ).then(function (response) {
            // expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.eq(200)
        })
    })
})