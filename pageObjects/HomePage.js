class HomePage
{

      getEditBox()
    {

        return cy.get(':nth-child(1) > .form-control')
    }
    getEmailAdress()
    {
        return cy.get(':nth-child(2) > .form-control')
    }
    getPassWord()
    {
       return cy.get('#exampleInputPassword1')
    }
    getTwoWayData()
    {
        return cy.get('.ng-pristine')
    }
    getGender()
    {
        return cy.get('select')
    }
    getEntrepreneaur()
    {
        return cy.get('#inlineRadio3')
    }
    getShopTab()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }


}

export default HomePage;