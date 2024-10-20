let inventory = [ 'броня', 'щит', 'копье']


function addItem(item) {
    let isItemInInventory = false
    let counter = 0

    while (counter < inventory.length) {

        let currentItem = inventory[counter]
        
        if (item === currentItem) {
            isItemInInventory = true
        }
        counter++
    }

    if (isItemInInventory === false) {
        
        console.log(isItemInInventory)
        inventory.push(item)
    }
}

addItem('щит')
console.log('inventory add щит', inventory)
addItem("меч")
console.log('inventory add меч', inventory)


