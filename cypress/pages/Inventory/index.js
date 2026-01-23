import elements from "./elements"
export default new class Inventory{


    confirmatingPage(options) {
        cy.url(options).should('eq', elements.InventoryUrl)

    }

    addItemToCart(item) {
        cy.get(elements.addToCartItem(item)).click()
    }

    removeItemToCart(item) {
        cy.get(elements.removeToCartItem(item)).click()

    }

    glitchUserTime(elemenstsCall) {

        cy.window().then((win) => {
            const startTime = win.performance.now()
            elemenstsCall.call()


            cy.url().should('eq', elements.InventoryUrl).then(() => {

                const endTime = win.performance.now()
                const elapsedTime = (endTime - startTime) / 1000
                const duration = parseFloat(elapsedTime.toFixed(2))

                cy.log(`tempo decorrido ${duration}`)

                expect(duration).to.be.greaterThan(4)
            })

        })

    }

    checkMenssegeErriCLI(errMenssage) {
        cy.on('uncaught:exception', (err, runnable) => {

            console.log('Erro capturado:', err.message);
            if (err.message.includes(errMenssage)) {
                return false;
            }

            return true;
        });

        cy.screenshot()
    }

    getInventoryItemCartName(idNum, itemName) {
        cy.get(`${elements.itemPositionNum(idNum)} > ${elements.inventoryItemName}`).should('have.text', itemName).click()
    }

    checkUrlIdItem(idNum) {
        cy.url().should('eq', elements.iventoryIdUrl(idNum))
        cy.screenshot()
    }

    getItemCartName(textItem) {
        cy.get(elements.inventoryItemName).should('have.text', textItem)
    }

    header02OptionClick(optionName) {
        cy.get(elements.orderBoxContainer).select([optionName])
        cy.screenshot()
    }

    verifyOrderLowToHight() {

        let listArr = []

        for (let item = 1; item < 7; item++) {
            cy.get(elements.itemPriceValue(item))
                .then(($item) => {

                    const transformText = parseFloat($item.text().replaceAll('$', ''))
                    listArr.push(transformText)

                })
        }
        cy.wrap(listArr).should('have.length', 6).then((arr) => {

            arr.forEach((Item, index) => {

                if (index < listArr.length - 1) {

                    const proximoItem = arr[index + 1]

                    expect(proximoItem).to.be.at.least(Item)

                }

            })

        })


    }

    verifyOrderHightToLow() {

        let listArr = []

        for (let item = 1; item < 7; item++) {
            cy.get(elements.itemPriceValue(item))
                .then(($item) => {

                    const transformText = parseFloat($item.text().replaceAll('$', ''))
                    listArr.push(transformText)

                })
        }
        cy.wrap(listArr).should('have.length', 6).then((arr) => {

            arr.forEach((Item, index) => {

                if (index < listArr.length - 1) {

                    const proximoItem = arr[index + 1]

                    expect(Item).to.be.at.least(proximoItem)

                }
            })
        })
    }

    verifyOrderAtoZ() {

        for (let item = 0; item < 6; item++) {
            cy.get(`[data-test="item-${item}-title-link"] > [data-test="inventory-item-name"]`)
                .then(($item) => {

                    const ordenedList = [...$item].map((el) => el.innerText.trim())
                    const zToAList = ordenedList.sort((a, b) => {
                        a.localeCompare(b)
                    })

                    expect(ordenedList).to.be.eq(zToAList)

                })
        }


    }

    verifyOrderZtoA() {

        for (let item = 0; item < 6; item++) {
            cy.get(`[data-test="item-${item}-title-link"] > [data-test="inventory-item-name"]`)
                .then(($item) => {

                    const ordenedList = [...$item].map((el) => el.innerText.trim())
                    const zToAList = ordenedList.sort((a, b) => {
                        b.localeCompare(a)
                    })

                    expect(ordenedList).to.be.eq(zToAList)

                })
        }


    }

    getAlertWindow(mensageError) {
        cy.on('window:alert', (str) => {
            expect(str).to.equal(mensageError);
        });
        cy.screenshot()
    }

    getEspecificItemValuePrice(itemID, secondItemPrice) {
        cy.get(elements.itemPriceValue(itemID)).then((valueItem) => {
            const transformText = parseFloat(valueItem.text().replaceAll('$', ''))
            return transformText
        }).as('firstPrice')
    }

    getImageItemSrc() {
        cy.get(elements.itemImage).then((item) => {
            return item.attr('src')
        })
    }
}