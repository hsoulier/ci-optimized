describe('Home tests', () => {
  it('should contains new env', () => {
    cy.visit('/')
    cy.get("h1").should("contain.text", "e2e")
  })
})