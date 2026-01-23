import login from "../pages/login"
import Inventory from "../pages/Inventory"
import { user, pass } from "../helper/users"

describe('Testing the login', ()=>{

    beforeEach(() => {
        login.visitPage()
    })

    it('Sucefully pass test in standard_user', () => { 

        login.makeLogin(Cypress.env('STANDART_USER'), Cypress.env('PASS'))

        Inventory.confirmatingPage()

     })

    it('Fail to test in standard_user', () => { 
        login.makeLogin('erroUser', 'errorPass')

        login.getErroFromLogin()
     })

    it('Sucefully pass test in locked_out_user', () => { 
        login.makeLogin(user.LockedU, pass)

        login.gerErroLockedLogin()
     })

    it('Sucefully pass test in problem_user', () => { 
        login.makeLogin(user.ProblemU, pass)

        Inventory.confirmatingPage()
     })

    it('Sucefully pass test in performance_glitch_user', () => {


        Inventory.glitchUserTime({
            call: () => login.makeLogin(user.PerformanceGU, pass)
        })


     })

    it('Sucefully pass test in  error_user', () => { 
        login.makeLogin(user.ErroU, pass)

        Inventory.confirmatingPage()
     })

    it('Sucefully pass test in visual_user', () => { 
        login.makeLogin(user.VisualU, pass)

        Inventory.confirmatingPage()
     })
})