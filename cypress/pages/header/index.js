import elements from "./elements"

export default new class header {

    verifyValueCartBadge(qtt){
        cy.get(elements.qttShpCartBadge).should('have.text', qtt)
    }

    verifyCartBadgeNotExist(){
        cy.get(elements.qttShpCartBadge).should('not.eq')
    }

    navigateToCart(){
        cy.get(elements.carBadgeLink).click()
    }

}