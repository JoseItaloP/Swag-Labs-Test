const elements = {
    InventoryUrl: 'https://www.saucedemo.com/inventory.html',
    addToCartItem: (element) => `[data-test="add-to-cart-${transformData(element)}"]`,
    removeToCartItem: (element) => `[data-test="remove-${transformData(element)}"]`,
    inventoryItemName: '[data-test="inventory-item-name"]',
    iventoryIdUrl: (idN) => `https://www.saucedemo.com/inventory-item.html?id=${idN}`,
    itemPositionNum: (idNum) => `[data-test="item-${idNum}-title-link"]`,
    itemPriceValue: (itemId) => `:nth-child(${itemId}) > [data-test="inventory-item-description"] > .pricebar >  [data-test="inventory-item-price"]`
}

function transformData(data) {
    return data.replaceAll(' ', '-').toLowerCase()
}

export default elements