/// <reference types="Cypress"/>
describe("testing hangman", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("checking R button", () => {
    cy.get("button").contains("R");
    cy.get("button").contains("R").click();
    cy.get("p span").first().contains("R");
  });
  it("checking e button", () => {
    cy.get("button").contains("e");
    cy.get("button").contains("e").click();
    cy.get("p span").eq(1).contains("e");
  });
  it("checking a button", () => {
    cy.get("button").contains("a");
    cy.get("button").contains("a").click();
    cy.get("p span").eq(2).contains("a");
  });
  it("checking c button", () => {
    cy.get("button").contains("c");
    cy.get("button").contains("c").click();
    cy.get("p span").eq(3).contains("c");
  });

  it("checking t button", () => {
    cy.get("button").contains("t");
    cy.get("button").contains("t").click();
    cy.get("p span").eq(4).contains("t");
  });
  it("display attempt", () => {
    cy.get("p").contains("Attempts ");
  });
  it("after all button click", () => {
    cy.get("button").should("have.length", 5);
    for (let i = 0; i < 5; i++) {
      cy.get("button").eq(i).click();
    }
    cy.get("p").contains("You won!");
    cy.get("p").contains("Attempts remaining: 5");
  });
});
