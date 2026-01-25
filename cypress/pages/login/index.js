import elements from "./elements"
import { URL } from "../../helper/users"

export default new class Login {

    visitPage() {

        cy.visit(URL)
        cy.screenshot()

    }

    makeLogin(UserName, Password){

        if (!UserName || !Password) {
            throw new Error(`Valores de login ausentes! User: ${UserName}, Pass: ${Password}`);
        }

        cy.get(elements.dataTestUsername).type(UserName)
        cy.get(elements.dataTestPass).type(Password)
        cy.get(elements.dataTestButt).click()

    }

    getErroFromLogin(){
        cy.get(elements.dataTestErr)
        .should('exist')
        .and('have.text', 'Epic sadface: Username and password do not match any user in this service')

        cy.screenshot()
    }

    gerErroLockedLogin(){
        cy.get(elements.dataTestErr)
        .should('exist')
        .and('have.text', 'Epic sadface: Sorry, this user has been locked out.')

        cy.screenshot()
    }
}