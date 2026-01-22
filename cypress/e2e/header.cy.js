import login from "../pages/login"
import header from "../pages/header"

describe(' Header elements test ', ()=>{

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

    // logout test
    it("should make the logout correctly", ()=>{
        login.makeLogin(user.StandardU, pass)

        header.clickOnLogoutBtt()

        cy.url().should('eq', 'https://www.saucedemo.com/')
    })

    it("should navigate to all items page")



})