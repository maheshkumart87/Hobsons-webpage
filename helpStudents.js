import './commands'

describe('help students viewport window alignment', () => {

beforeEach(() => {
        cy.visit('www.hobsons.com')
    });
    
it('verify if help students window aligned properly to the top of the screen', () => {

    cy.get('span.fas.fa-chevron-down').click({ force: true})
    cy.isInViewport('span.fas.fa-chevron-down')
    cy.window().should('have.property', 'top')

  })

})