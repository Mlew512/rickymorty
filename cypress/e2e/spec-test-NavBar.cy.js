describe("My First Cypress Test", () => {
  it("Visits the app and asserts title", () => {
      cy.visit('/');
      cy.get('#NavBar').should('contain', "Home");
  });
});