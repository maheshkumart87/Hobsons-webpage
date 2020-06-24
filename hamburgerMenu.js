
describe('Hobsons Menu functionality test', () => {

beforeEach(() => {
        cy.visit('www.hobsons.com')
        cy.get('button > span').click({ force: true})
    });
    
it('Verify menu items displayed on clicking on hamburger menu', () => {
   
    //verify menu displays all items
    cy.get('li.home-link > a').should('be.visible')
    .should('have.text', 'Home')
    cy.get('nav > ul > li:nth-child(2) > a').should('be.visible')
    .should('have.text', 'Solutions')
    cy.get('nav > ul > li:nth-child(3) > a').should('be.visible')
    .should('have.text', 'Services')
    cy.get('nav > ul > li:nth-child(4) > a').should('be.visible')
    .should('have.text', 'Resources')
    cy.get('nav > ul > li:nth-child(5) > a').should('be.visible')
    .should('have.text', 'Careers')
    cy.get('nav > ul > li:nth-child(6) > a').should('be.visible')
    .should('have.text', 'About')
    cy.get('nav > ul > li:nth-child(7) > a').should('be.visible')
    .should('have.text', 'Blog')
    cy.get('li.start> a').should('be.visible')
    .should('have.text', 'Get Started')

  })
  
it('Verify Resources menu has list of sub items including Events displayed', () => {
   
    //verify Resources under menu
    cy.get('nav > ul > li:nth-child(4) > a').click({ force: true}).should('have.text', 'Resources')
    //verify if Events displayed under Resources
    cy.get('nav > ul > li:nth-child(4) > ul > li:nth-child(3) > a').should('be.visible')
    .should('have.text', 'Events')

  })

it('Verify events on the year 2020', () => {
   
    //verify Events under Resources
    cy.get('nav > ul > li:nth-child(4) > a').click({ force: true}).should('have.text', 'Resources')
    //clicking on Events
    cy.get('nav > ul > li:nth-child(4) > ul > li:nth-child(3) > a').should('be.visible')
    .should('have.text', 'Events').click()
    //scroll to view
    cy.get('section#articles div:nth-child(6) > div.txt >h4 >a').scrollIntoView()
    .should('be.visible')
    //href urls that have 2020 in their title
    cy.get('div.txt >h4 >a').should('contain', '2020').and('have.attr', 'href')
    //Assert to validate events that are scheduled for the year 2020
    cy.get(':nth-child(6) div.txt >h4 >a').contains('2020')
    cy.get(':nth-child(7) div.txt >h4 >a').contains('2020')
    cy.get(':nth-child(8) div.txt >h4 >a').contains('2020')
    cy.get(':nth-child(10) div.txt >h4 >a').contains('2020')
})

})