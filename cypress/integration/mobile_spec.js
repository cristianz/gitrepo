describe("Mobile DE Automation Practice", () => {
  it("Initial Test", () => {
    cy.visit("https://www.mobile.de/?lang=en");
    cy.get("[id=qsmakeBuy]").click();
  });
});
