// https://on.cypress.io/api

describe('My First Test', () => {
  it('root url', () => {
    cy.visit('/')
    cy.get('div.greetings').within(($div) => {
      cy.get('a#vite').should('have.text', 'Vite');
    })
    cy.location().its('origin').should('contain', 'localhost');
  })
})
