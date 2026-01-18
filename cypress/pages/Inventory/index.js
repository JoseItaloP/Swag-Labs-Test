import elements from "./elements"
export default new class Inventory{
    confirmatingPage(){
        cy.url().should('eq', elements.InventoryUrl)
    }

    addItemToCart(item) {
        cy.get(elements.addToCartItem(item)).click()
    }

    removeItemToCart(item) {
        cy.get(elements.removeToCartItem(item)).click()
    }
}