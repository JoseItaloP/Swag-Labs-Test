const elements ={
    checkoutOneUrl: Cypress.env('STANDART_URL') + 'checkout-step-one.html',
    inputFirstName: '[data-test="firstName"]',
    inputLastName: '[data-test="lastName"]',
    inputPostalCode: '[data-test="postalCode"]',
    errorBox: '[data-test="error"]',
    btnContinue: '[data-test="continue"]',
    btnCancel: '[data-test="cancel"]'
}

export default elements