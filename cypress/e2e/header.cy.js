import login from "../pages/login"
import header from "../pages/header"
import { user, pass } from "../helper/users"


describe(' Header elements test ', () => {


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