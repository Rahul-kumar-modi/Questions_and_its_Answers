function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

const cart = [
    { id: 1, name: 'Laptop', price: 999, quantity: 1 },
    { id: 2, name: 'Phone', price: 499, quantity: 2 },
    { id: 3, name: 'Shirt', price: 29, quantity: 3 },
    { id: 4, name: 'Pants', price: 49, quantity: 1 },
];

const totalCost = calculateTotal(cart);

console.log(`Total cost: 💲${totalCost}`);





