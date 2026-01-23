import elements from "./elements"

export default new class header {

    verifyValueCartBadge(qtt){
        cy.get(elements.qttShpCartBadge).should('have.text', qtt)
        cy.screenshot()
    }

    verifyCartBadgeNotExist(){
        cy.get(elements.qttShpCartBadge).should('not.exist')
        cy.screenshot()
    }

    navigateToCart(){
        cy.get(elements.carBadgeLink).click()
    }

    clickOnLogoutBtt() {
        cy.get('#react-burger-menu-btn').click()
        cy.screenshot()
        cy.get('[data-test="logout-sidebar-link"]').click()
    }

}