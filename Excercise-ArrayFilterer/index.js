function filterProducts(products, filter) {
    return products.filter(product => {
        return Object.keys(filter).every(key => product[key] === filter[key]);
    });
}

// Example usage:
const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 499 },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 29 },
    { id: 4, name: 'Pants', category: 'Clothing', price: 49 },
    { id: 5, name: 'Tablet', category: 'Electronics', price: 199 },
];

const filter = { category: 'Clothing' };
const filteredProducts = filterProducts(products, filter);

console.log(filteredProducts);


