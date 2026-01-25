import { URL } from "../../helper/users"

const elements = {
    url: URL + 'cart.html',
    itemInCart: '[data-test="inventory-item-name"]',
    removeItemBtt: (itemName) => `[data-test="remove-${transformData(itemName)}"]`,
    bttContinueShopping: '[data-test="continue-shopping"]',
    btnCheckout: '[data-test="checkout"]'
}

function transformData(data) {
    return data.replaceAll(' ', '-').toLowerCase()
}

export default elements
