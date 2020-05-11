describe('visual regression - login page', () => {
    before(function(){
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.get('#signin_button').click()
        cy.get('#user_login').type('usrname')
        cy.get('#user_password').type('password')
        cy.get('#user_remember_me').click()
        cy.get('input[name="submit"]').click()

    })

    it('load data activity', () => {
        cy.get('#account_activity_tab').click()
    })

    it('verify data table', () => {
        cy.matchImageSnapshot()
    })

})

