class LoginPage {
    visit() {
        cy.visit('https://rahulshettyacademy.com/client')
    }
    login(email, password) {
        cy.get('#userEmail').type(email)
        cy.get('#userPassword').type(password)
        cy.get('#login').click()
    }
}
export default LoginPage