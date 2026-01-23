import login from "../pages/login"
import Inventory from "../pages/Inventory"
import header from "../pages/header"
import cart from "../pages/cart"
import { user, pass } from "../helper/users"


describe('Cart page testing', ()=>{



    beforeEach(() => {
        login.visitPage()
    })

    it('should remove the item correctly from the cart', () => {

        login.makeLogin(user.StandardU, pass)

        Inventory.addItemToCart('Sauce Labs Backpack')
        Inventory.addItemToCart('Sauce Labs Bike Light')

        header.verifyValueCartBadge(2)
        header.navigateToCart()

        cart.verifyUrlCart()

        cart.removeItemCart('Sauce Labs Backpack')
        cart.checkItemRemoved('Sauce Labs Backpack')

        cart.removeItemCart('Sauce Labs Bike Light')
        cart.checkItemRemoved('Sauce Labs Bike Light')

        cart.clickOnContinueShopping()

        header.verifyCartBadgeNotExist()

    })

    it('should wait a time with the glitch_user after return from the cart page to the inventory', () => {

        login.makeLogin(user.PerformanceGU, pass)

        header.navigateToCart()

        Inventory.glitchUserTime({
            call: () => cart.clickOnContinueShopping()
        })

    })

})