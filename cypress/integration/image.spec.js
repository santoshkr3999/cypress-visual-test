describe('Visual regression', () => {
    it('My first visual test', () => {
        cy.visit('https://example.com')
        cy.matchImageSnapshot()
    })
})