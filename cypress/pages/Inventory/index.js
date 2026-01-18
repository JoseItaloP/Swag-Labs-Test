import elements from "./elements"
export default new class Inventory{
    confirmatingPage(){
        cy.url().should('eq', elements.InventoryUrl)
    }
}