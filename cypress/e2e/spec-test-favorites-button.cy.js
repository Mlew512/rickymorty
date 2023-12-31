describe('Favorite Button Test', () => {
  it("Adds a character to favorites", () => {
    cy.visit('characters/');

    cy.get('.col-md-4.mb-4').first().within(()=> {
      cy.get('button:contains("Favorite")').click();
    });

    cy.get('.card').first().within(() => {
      cy.get('button:contains("Remove")').should('exist');
    });
    cy.get('#NavBar').should('contain', 'Fav 1');
  });
});