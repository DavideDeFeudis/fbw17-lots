let coffees = [
    { name: "Café latte", price: 1.50 },
    { name: "Americano", price: 2.00 },
    { name: "Latte macchiato", price: 2.50 },
]

console.log(coffees);
console.log();

// add a new coffee to our collection
// at the very beginning of the array
coffees.unshift(
    { name: "Café creme", price: 1 }
);

console.log(coffees);
console.log();

// just give me the first two coffee items of my collection
let subArray = coffees.slice(0, 2);
console.log(subArray);
