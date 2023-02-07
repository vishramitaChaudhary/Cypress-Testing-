/// <reference types="cypress"/>

describe('Test suit1', function test(){

it('Visit website', () =>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('vishu{Enter}')
   // cy.get([password])
})



})



