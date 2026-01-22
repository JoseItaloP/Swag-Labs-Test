import login from "../pages/login"
import Inventory from "../pages/Inventory"
import header from "../pages/header"
import cart from "../pages/cart"

describe('Cart page testing', ()=>{

    const user = {
        StandardU: 'standard_user',
        LockedU: 'locked_out_user',
        ProblemU: 'problem_user',
        PerformanceGU: 'performance_glitch_user',
        ErroU: 'error_user',
        VisualU: 'visual_user'
    }

    const pass = 'secret_sauce'

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

    it.only('should wait a time with the glitch_user after return from the cart page to the inventory', () => {

        login.makeLogin(user.PerformanceGU, pass)

        header.navigateToCart()

        Inventory.glitchUserTime({
            call: () => cart.clickOnContinueShopping()
        })

    })

})