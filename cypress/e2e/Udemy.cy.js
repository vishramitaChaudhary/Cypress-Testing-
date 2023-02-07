/// <reference types="cypress"/>

it('Google Search', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

cy.get('#alertbtn').click()
cy.wait(1000)
cy.get('#confirmbtn').click()

//windw alert
cy.on('window:alert',(str)=>

{
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
cy.get('#opentab').invoke('removeAttr','target').click()

cy.wait(5000)
cy.go('back')

cy.get("tr td:nth-child(2)").each(($el, index, $list) => {

    const text=$el.text()
    if(text.includes("Python"))

    {
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price) {
            const priceText= price.text()
            expect(priceText).to.equal('25')
        })
    }
})


//mouseover

//cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Top').click({force: true}) // use for invisbile element
cy.url().should('include','top')

//check boxes naviagting to url

cy.get('#openwindow').invoke('removeAttr','target').click()

cy.wait(5000)
cy.go('back')

})