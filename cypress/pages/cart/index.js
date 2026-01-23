import elements from "./elements"

export default new class cart{

    verifyUrlCart(){
        cy.url().should('eq', elements.url)
    }

    verifyItemInCart(item){
        cy.get(elements.itemInCart).should('have.text', item)
        cy.screenshot()
    }

    removeItemCart(itemName) {
        cy.get(elements.removeItemBtt(itemName)).click()
        cy.screenshot()
    }

    checkItemRemoved(itemName) {
        cy.get(elements.removeItemBtt(itemName)).should('not.exist',)
    }

    clickOnContinueShopping() {
        cy.get(elements.bttContinueShopping).click()
    }

    clickOnBtnCheckout() {
        cy.get(elements.btnCheckout).click()
    }
}