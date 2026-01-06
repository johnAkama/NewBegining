let inventory = [];
function findProductIndex(productName) {
    const name = productName.toLowerCase();

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === name) {
            return i;
        }
    }

    return -1;
}

function addProduct(product) {
    const name = product.name.toLowerCase();
    const index = findProductIndex(name);

    if (index !== -1) {
        inventory[index].quantity += product.quantity;
        console.log(`${name} quantity updated`);
    } else {
        inventory.push({
            name: name,
            quantity: product.quantity,
        });
        console.log(`${name} added to inventory`);
    }
}

function removeProduct(productName, quantity) {
    const name = productName.toLowerCase();
    const index = findProductIndex(name);

    if (index === -1) {
        console.log(`${name} not found`);
        return;
    }

    const product = inventory[index];

    if (product.quantity < quantity) {
        console.log(
            `Not enough ${name} available, remaining pieces: ${product.quantity}`
        );
        return;
    }

    product.quantity -= quantity;

    if (product.quantity === 0) {
        inventory.splice(index, 1);
    }

    console.log(`Remaining ${name} pieces: ${product.quantity}`);
}
