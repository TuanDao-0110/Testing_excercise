/// <reference types="Cypress"/>
describe("testing ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("checking", () => {
    cy.get("input").type("welcome to cypress");
    // cy.get("a").click();
    cy.hash().should("eq", "https://reactjs.org/");
    cy.get("p").should("have.text", "Edit src/App.tsx and save to reload.");
  });

  it("counter testing ", () => {
    cy.get("button").should("have.text", "add one").click();
    // cy.contains('div','count').should("have.text", " count is 1");
    cy.get('div').contains(' count s')
  });

});
