// analyze the given function and determine if its pure or not
// refactor if its not

let cart = [
    {id: 1, name: "Laptop", price: 1000, quantity: 1},
    {id: 2, name: "Phone", price: 500, quantity: 2}
];

let discountPercentage = 15;

function applyDiscountAndUpdateCart(cart, discountPercentage) {
    for (let item of cart) {
        item.price -= item.price * (discountPercentage / 100);
    }
}

// REFACTORED VERSION

const applyDiscount = (card, discountPercentage) => {
    let newCart = [];
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let newItem = {
            id: item.id,
            name: item.name,
            price: item.price * (1 - discountPercentage / 100),
            quantity: item.quantity
        };
        newCart.push(newItem);
    }
    return newCart;
}