import elements from "./elements"

export default new class checkoutOne {
    checkUrlCheckout(){
        cy.url().should('eq', elements.checkoutOneUrl)
    }

    wirtInformation(firstName, lastName, zipCode){

        if(firstName) cy.get(elements.inputFirstName).type(firstName)
        if(lastName) cy.get(elements.inputLastName).type(lastName)
        if(zipCode) cy.get(elements.inputPostalCode).type(zipCode)

    }

    checkeLastName(){
        cy.get(elements.inputLastName).should('be.empty')
    }

    pressContinueBtt(){
        cy.get(elements.btnContinue).click()
    }

    pressCancelBtt(){
        cy.get(elements.btnCancel).click()
    }

    espectedErroMensageInput(erroMensage){
        cy.get(elements.errorBox).should('have.text', erroMensage)
    }
}