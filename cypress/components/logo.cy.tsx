import Logo from "../../components/logo"

describe("Logo", ()=> {
  it("should display the environment", () => {
    cy.mount(<Logo />)
    cy.log(Cypress.env("NEXT_PUBLIC_ENV"))
    cy.get("h1").should("contain.text", "component")
  })
})