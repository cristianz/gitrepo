describe("Mobile DE Automation Practice", () => {
  it("Initial Test", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("Commands").click();
    cy.contains("Viewport").click();
  });
});
