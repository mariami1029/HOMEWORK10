describe('Register User Test', () => {

  it('should register a new user successfully', () => {
    cy.visit('https://www.automationexercise.com')
    cy.contains('Signup / Login').click()
    const email = `test${Date.now()}@mail.com`
    cy.get('input[data-qa="signup-name"]').type('Mariami')
    cy.get('input[data-qa="signup-email"]').type(email)
    cy.get('button[data-qa="signup-button"]').click()
    cy.get('#id_gender2').check()
    cy.get('#password').type('Mariami123')
    cy.get('#days').select('29')
    cy.get('#months').select('Octomber')
    cy.get('#years').select('2005')
    cy.get('#first_name').type('Mariami')
    cy.get('#last_name').type('Test')
    cy.get('#address1').type('Tbilisi')
    cy.get('#country').select('USA')
    cy.get('#state').type('Utah')
    cy.get('#city').type('Tbilisi')
    cy.get('#zipcode').type('0101')
    cy.get('#mobile_number').type('591097313')
    cy.get('button[data-qa="create-account"]').click()
    cy.contains('Account Created!').should('be.visible')
    cy.contains('Continue').click()
    cy.contains('Logged in as').should('be.visible')

  })

})