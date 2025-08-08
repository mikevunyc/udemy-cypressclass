describe('My 4th test', function() 
{

  
  it('My 4th test', function() {
    //Checkboxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()
    //window:alert
    cy.on('window:alert',(str) => {
      //mocha
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    cy.on('window:confirm',(str) => {
      //mocha
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })

  })

})