import elements from "./elements"

export default new class checkoutTwo{

    clickOnFinisher(){
        cy.get(elements.bttFinisher).click()
    }

    clickOnCancel(){
        cy.get(elements.bttCancel).click()
    }

   

    checkItem(itemName,ItemPrice,ItemPriceSubtotal){
        cy.get(elements.itemName).should('have.text', itemName)
        cy.get(elements.itemPrice).should('have.text', ItemPrice)
        cy.get(elements.itemPriceSubtotal).should('have.text', ItemPriceSubtotal)
        cy.screenshot()
    }

}