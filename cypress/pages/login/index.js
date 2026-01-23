import elements from "./elements"

export default new class Login {

    visitPage() {
        console.log(`URL - ${Cypress.env('STANDART_URL')}`)
        cy.visit(Cypress.env('STANDART_URL'))
        cy.screenshot()

    }

    makeLogin(UserName, Password){
        cy.get(elements.dataTestUsername).type(UserName)
        cy.get(elements.dataTestPass).type(Password)
        cy.get(elements.dataTestButt).click()

    }

    getErroFromLogin(){
        cy.get(elements.dataTestErr)
        .should('exist')
        .and('have.text', 'Epic sadface: Username and password do not match any user in this service')

        cy.screenshot()
    }

    gerErroLockedLogin(){
        cy.get(elements.dataTestErr)
        .should('exist')
        .and('have.text', 'Epic sadface: Sorry, this user has been locked out.')

        cy.screenshot()
    }
}