/// <reference types="cypress"/>
import HomePageSwag from "../../../../pageObjects/HomePageSwag"


describe('TestSuit1', () => {
      before(function (){
        cy.fixture("swag").then((data) => {
            this.data = data;
            console.log(data);

        });
      });

    it('loginPage',function () {

        const Homepagee=new HomePageSwag()

        cy.visit('https://www.saucedemo.com/');
       // cy.wait(20000);
        var title = cy.title();
        console.log(title);
        Homepagee.getUsername().type(this.data.username)
        Homepagee.getPassword().type(this.data.password)
        Homepagee.getEnter().click()
        cy.get('[data-test="error"]').should('be.visible')




    })

})



