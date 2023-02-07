/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage"



before(function(){
    cy.fixture('example').then(function(data)
    {
this.data=data
    })

})
it('Google Search',function () {
const homePage=new HomePage()

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    homePage.getEditBox().type(this.data.name)
    cy.wait(2000)
    homePage.getEmailAdress().type(this.data.email)
    cy.wait(2000)
    homePage.getPassWord().type(this.data.password)
    homePage.getTwoWayData().should('have.value',this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneaur().should('be.disabled')
    homePage.getShopTab().click()

    //cy.pause()
    
    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
    })

    



})