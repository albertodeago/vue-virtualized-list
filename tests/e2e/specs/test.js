// https://docs.cypress.io/api/introduction/api.html

describe('vue-virtualized-list', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('static text - content-0')
  })
})
