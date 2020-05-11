describe('visual regression testing with percy and cypress', () => {
    it('should take percy snapshot', () => {
        cy.visit("http://example.com")
        cy.wait(2000)
        cy.percySnapshot("santosh")
    })
})