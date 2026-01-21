import login from "../pages/login"
import Inventory from "../pages/Inventory"
import elements from "../pages/Inventory/elements"

describe('Testing the login', ()=>{

        const user = {
            StandardU: 'standard_user',
            LockedU: 'locked_out_user',
            ProblemU: 'problem_user',
            PerformanceGU: 'performance_glitch_user',
            ErroU: 'error_user',
            VisualU: 'visual_user'
        }

        const pass = 'secret_sauce'

        beforeEach(()=>{
            login.visitPage()
        })

    it('Sucefully pass test in standard_user', () => { 

        login.makeLogin(user.StandardU, pass)

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

        cy.window().then((win) => {
            const startTime = win.performance.now()
            login.makeLogin(user.PerformanceGU, pass)

            cy.url().should('eq', elements.InventoryUrl).then(() => {

                const endTime = win.performance.now()
                const elapsedTime = (endTime - startTime) / 1000
                const duration = parseFloat(elapsedTime)

                cy.log(`tempo decorrido ${duration}`)

                expect(duration).to.be.greaterThan(4)
            })

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