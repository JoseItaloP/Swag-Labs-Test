import elements from "./elements"

export default new class cart{

    verifyUrlCart(){
        cy.url().should('eq', elements.url)
    }

    verifyItemInCart(item){
        cy.get(elements.itemInCart).should('have.text', item)
    }
}