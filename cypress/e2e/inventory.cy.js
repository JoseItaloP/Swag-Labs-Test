import cart from "../pages/cart"
import header from "../pages/header"
import Inventory from "../pages/Inventory"
import login from "../pages/login"

describe('Inventory test page', ()=>{
        
        const user = {
            StandardU: 'standard_user',
            ProblemU: 'problem_user',
            PerformanceGU: 'performance_glitch_user',
            ErroU: 'error_user',
            VisualU: 'visual_user'
        }

        const pass = 'secret_sauce'

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

    it.only("should remove the item from the cart succefully", () => {
        login.makeLogin(user.StandardU, pass)

        Inventory.addItemToCart('Sauce Labs Backpack')

        header.verifyValueCartBadge(1)

        Inventory.removeItemToCart('Sauce Labs Backpack')

        header.verifyCartBadgeNotExist()
    })

    it("should not remove item from the cart in problem_user",()=>{

    })

    it("should not remove item from the cart in error_user")

    //check click on item
    it("should show the same item after click on it", ()=>{

    })

    it("should not show the same item after click on it with problem_user", ()=>{
        
    })

    //check product order
    it("should change the order from the low to the hight price", () => {

    })

    it("should change the order from the hight to low price", () => {

    })

    it("should change the order to Z-A", () => {

    })
})