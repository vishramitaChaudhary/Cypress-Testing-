/// <reference types="cypress"/>

it('Google Search', () => {

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca{Enter}')
    cy.wait(2000)
   // cy.get('.product:visible').should('have.length',4)

    cy.get('.products').find('.product').should('have.length',4)

   cy.get(':nth-child(2) > .product-action > button').click()

   
   //cy.get('.products').find('.product').eq(2).contains('ADD To CART').click()

   cy.get('.products').find('.product').each(($el, index, $list) => {
  
    const textVeg=$el.find('h4.product-name').text()
    if(textVeg.includes('Cashews'))
    {
    cy.wrap($el).find('button').click()
    }
    })

    cy.get('.brand').should('have.text','GREENKART')
    cy.get('.brand').then(function(logoelement)
    {
        cy.log(logoelement.text())
    })

    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
    

    

    } ) 

   
    


  



