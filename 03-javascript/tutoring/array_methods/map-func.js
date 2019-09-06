let coffees = [
    { name: "Café latte", price: 1.50 },
    { name: "Americano", price: 2.00 },
    { name: "Latte macchiato", price: 2.50 },
]

console.log(coffees);
console.log();

// increase the prices by one EUR
let mappedArray = coffees.map(function (currentItem) {
    currentItem.price = currentItem.price + 1;
    return currentItem;
});

console.log(mappedArray);