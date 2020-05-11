describe('visual regression - login page', () => {
    before(function(){
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.get('#signin_button').click()
        cy.get('#user_login').type('usrname')
        cy.get('#user_password').type('password')
        cy.get('#user_remember_me').click()
    })

    // it('desktop layout', () => {
    //     cy.setResolution(800, 500)
    //     cy.matchImageSnapshot()
    // })

    it('tablet layout', () => {
        cy.setResolution('ipad-2')
        cy.matchImageSnapshot()
    })

    it('mobile layout', () => {
        cy.setResolution('iphone-6')
        cy.matchImageSnapshot()
    })
})