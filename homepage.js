describe('Hobsons homepage test', () => {
  it('verify if Hobsons homepage is loaded!', () => {
    cy.visit('www.hobsons.com')
    
    //Should be on Hobsons URL which includes 'hobsons' in it
    cy.url().should('include', 'hobsons')
    //cy.get('span.fas.fa-chevron-down').click({ force: true})

  })

})