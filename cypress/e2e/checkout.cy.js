import login from "../pages/login"
import Inventory from "../pages/Inventory"
import header from "../pages/header"
import cart from "../pages/cart"
import checkoutOne from "../pages/checkout-one"
import checkoutTwo from "../pages/checkout-two"
import checkoutComplete from "../pages/checkout-complete"

describe("Test the checkout pages", ()=>{

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

    it('should finishing the buy with the item', () => {

        login.makeLogin(user.StandardU, pass)

        Inventory.addItemToCart('Sauce Labs Backpack')

        header.verifyValueCartBadge(1)
        header.navigateToCart()

        cart.verifyItemInCart('Sauce Labs Backpack')
        cart.clickOnBtnCheckout()

        checkoutOne.checkUrlCheckout()
        checkoutOne.wirtInformation('firstName', 'lastName', '000-000-00')
        checkoutOne.pressContinueBtt()

        checkoutTwo.checkItem('Sauce Labs Backpack', '$29.99', 'Item total: $29.99')
        checkoutTwo.clickOnFinisher()

        checkoutComplete.checkUrl()
        checkoutComplete.checkLayout('Thank you for your order!', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        checkoutComplete.clickOnBackToHome()

        Inventory.confirmatingPage()

    })

    it('should make appear erro after not digitate the data in checkout-page', () => {
        login.makeLogin(user.StandardU, pass)

        Inventory.addItemToCart('Sauce Labs Backpack')


        header.navigateToCart()


        cart.clickOnBtnCheckout()



        checkoutOne.pressContinueBtt()

        checkoutOne.espectedErroMensageInput('Error: First Name is required')

        checkoutOne.wirtInformation('firstName')
        checkoutOne.pressContinueBtt()

        checkoutOne.espectedErroMensageInput('Error: Last Name is required')

        checkoutOne.wirtInformation('firstName', 'lastName',)
        checkoutOne.pressContinueBtt()

        checkoutOne.espectedErroMensageInput('Error: Postal Code is required')

    })

    it.only('should return erro in finish with erroUser', () => {
        login.makeLogin(user.ErroU, pass)

        Inventory.addItemToCart('Sauce Labs Backpack')

        header.verifyValueCartBadge(1)
        header.navigateToCart()

        cart.verifyItemInCart('Sauce Labs Backpack')
        cart.clickOnBtnCheckout()

        checkoutOne.checkUrlCheckout()

        Cypress.on('uncaught:exception', (err, runnable) => {
            const expectedErr = [
                "The following error originated from your application code, not from Cypress.",
                "TypeError: Ye.cesetRart is not a function"
            ]

            const isExpectedErr = expectedErr.some((msg) => err.message.includes(msg))
            if (isExpectedErr) {
                console.log(`Mensagem de erro esperado: ${err.message}`)
                return false
            }
            return true;
        });

        checkoutOne.wirtInformation('firstName', 'lastName', '000-000-00')
        checkoutOne.checkeLastName()
        checkoutOne.pressContinueBtt()

        checkoutTwo.checkItem('Sauce Labs Backpack', '$29.99', 'Item total: $29.99')
        checkoutTwo.clickOnFinisher()
    })

    it('should not finish the buy without lastName with problem_user', () => {
        login.makeLogin(user.ProblemU, pass)

        Inventory.addItemToCart('Sauce Labs Backpack')

        header.verifyValueCartBadge(1)
        header.navigateToCart()

        cart.verifyItemInCart('Sauce Labs Backpack')
        cart.clickOnBtnCheckout()

        checkoutOne.checkUrlCheckout()
        checkoutOne.wirtInformation('firstName', 'lastName', '000-000-00')
        checkoutOne.checkeLastName()
        checkoutOne.pressContinueBtt()

        checkoutOne.espectedErroMensageInput('Error: Last Name is required')
    })

})  