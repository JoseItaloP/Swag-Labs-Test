import elements from "./elements"

export default new class checkoutComplete{

    checkUrl(){
        cy.url().should('eq', elements.checkCompletUrl)
        cy.screenshot()
    }

    checkLayout(header, text){
        cy.get(elements.headerComplete).should('have.text', header)
        cy.get(elements.textComplete).should('have.text', text)
    }
    clickOnBackToHome(){
        cy.get(elements.bttBackToHome).click()
    }

}