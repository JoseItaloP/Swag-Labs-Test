const elements = {
    url: 'https://www.saucedemo.com/cart.html',
    itemInCart: '[data-test="inventory-item-name"]',
    removeItemBtt: (itemName) => `[data-test="remove-${transformData(itemName)}"]`,
    bttContinueShopping: '[data-test="continue-shopping"]',

}

function transformData(data) {
    return data.replaceAll(' ', '-').toLowerCase()
}

export default elements
