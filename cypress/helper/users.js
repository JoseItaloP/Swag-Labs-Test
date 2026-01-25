const user = {
        StandardU:              Cypress.env('STANDART_USER'),
        LockedU:                Cypress.env('LOCKED_USER'),
        ProblemU:               Cypress.env('PROBLEM_USER'),
        PerformanceGU:          Cypress.env('PERFORMACEG_USER'),
        ErroU:                  Cypress.env('ERRO_USER'),
        VisualU:                Cypress.env('VISUAL_USER')
    }

const pass = Cypress.env('PASS_USER')
const URL = Cypress.env('URL')

export {
    user,
    pass,
    URL
}