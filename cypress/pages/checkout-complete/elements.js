const elements = {
    checkCompletUrl: Cypress.env('STANDART_URL') + 'checkout-complete.html',
    headerComplete: '[data-test="complete-header"]',
    textComplete: '[data-test="complete-text"]',
    bttBackToHome: '[data-test="back-to-products"]'
}

export default elements