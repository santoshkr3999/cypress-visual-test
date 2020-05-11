const pages = ["https://example.com"]
const devices = ["iphone-6", [1200, 800]]
describe('verify myltiple pages with multiple device', () => {
    devices.forEach(size => {
        pages.forEach(page => {
            it('should match ${page} in resolution ${size}', () => {
                let currentTime = new Date.UTC(2020, 1, 1).getDate()
                cy.clock(currentTime)
                cy.setResolution(size)
                cy.visit(page)
                cy.matchImageSnapshot()
            })
        })
    })


})