import cart from "../pages/cart"
import header from "../pages/header"
import elements from "../pages/header/elements"
import Inventory from "../pages/Inventory"
import login from "../pages/login"
import { user, pass } from "../helper/users"


describe('Inventory test page', ()=>{



    beforeEach(()=>{
        login.visitPage()
    })

    //check add to cart
    it('should add the item to the cart succefully', () => {
        login.makeLogin(user.StandardU, pass)

        Inventory.addItemToCart('Sauce Labs Backpack')

        header.verifyValueCartBadge(1)
        header.navigateToCart()

        cart.verifyUrlCart()
        cart.verifyItemInCart('Sauce Labs Backpack')
    })

    it("should remove the item from the cart succefully", () => {
        login.makeLogin(user.StandardU, pass)

        Inventory.addItemToCart('Sauce Labs Backpack')

        header.verifyValueCartBadge(1)

        Inventory.removeItemToCart('Sauce Labs Backpack')

        header.verifyCartBadgeNotExist()
    })


    it("should not remove item from the cart in problem_user", () => {
        login.makeLogin(user.ProblemU, pass)

        Inventory.addItemToCart('Sauce Labs Backpack')

        header.verifyValueCartBadge(1)

        Inventory.removeItemToCart('Sauce Labs Backpack')

        header.verifyValueCartBadge(1)
        header.navigateToCart()

        cart.verifyItemInCart('Sauce Labs Backpack')

    })

    it("should not remove item from the cart in error_user", () => {
        login.makeLogin(user.ErroU, pass)

        Inventory.addItemToCart('Sauce Labs Backpack')

        header.verifyValueCartBadge(1)

        Inventory.checkMenssegeErriCLI('Failed to remove item from cart.')
        Inventory.removeItemToCart('Sauce Labs Backpack')

        header.verifyValueCartBadge(1)
        header.navigateToCart()

        cart.verifyItemInCart('Sauce Labs Backpack')
    })

    //check click on item
    it("should show the same item after click on it", () => {

        login.makeLogin(user.StandardU, pass)

        Inventory.getInventoryItemCartName(4, 'Sauce Labs Backpack')
        Inventory.checkUrlIdItem(4)
        Inventory.getItemCartName('Sauce Labs Backpack')
    })

    it("should not show the same item after click on it with problem_user", () => {

        login.makeLogin(user.ProblemU, pass)

        Inventory.getInventoryItemCartName(4, 'Sauce Labs Backpack')
        Inventory.checkUrlIdItem(5)
        Inventory.getItemCartName('Sauce Labs Fleece Jacket')
    })

    //check product order
    it("should change the order from the low to the hight price", () => {
        login.makeLogin(user.StandardU, pass)

        Inventory.header02OptionClick('lohi')
        Inventory.verifyOrderLowToHight()

    })

    it("should change the order from the hight to low price", () => {
        login.makeLogin(user.StandardU, pass)

        Inventory.header02OptionClick('hilo')
        Inventory.verifyOrderHightToLow()

    })

    it("should change the order to Z-A", () => {
        login.makeLogin(user.StandardU, pass)

        Inventory.header02OptionClick('za')
        Inventory.verifyOrderZtoA()
    })

    it("should not work click on order items bar in problem_user", () => {
        login.makeLogin(user.ProblemU, pass)

        Inventory.header02OptionClick('za')
        Inventory.verifyOrderZtoA() 
    })

    it("should return erro after click on order items bar in erro_user", () => {
        login.makeLogin(user.ErroU, pass)

        Inventory.getAlertWindow('Sorting is broken! This error has been reported to Backtrace.')

        Inventory.header02OptionClick('za')

    })


    it("should show a different item after click on it in visual_user", () => {
        login.makeLogin(user.VisualU, pass)

        Inventory.getEspecificItemValuePrice(1)


        const ItemImage = Inventory.getImageItemSrc()

        Inventory.getInventoryItemCartName(4, 'Sauce Labs Backpack')

        cy.get('[data-test="item-sauce-labs-backpack-img"]').then((element) => {
            expect(element).to.not.have.attr('src', ItemImage)
        })

        cy.get('[data-test="inventory-item-price"]').then((element) => {
            const TransformText = parseFloat(element.text().replaceAll('$', ''))
            cy.get('@firstPrice').then((valueReturn) => {
                expect(TransformText).to.not.been.eql(valueReturn)
            })
        })

    })

})