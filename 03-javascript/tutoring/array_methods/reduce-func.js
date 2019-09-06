let coffeesSold = [
  { name: "Café latte", price: 1.50 },
  { name: "Americano", price: 2.00 },
  { name: "Americano", price: 2.00 },
  { name: "Latte macchiato", price: 2.50 },
  { name: "Café latte", price: 1.50 },
]

console.log(coffeesSold);
console.log();

// calculate the revenue of my sold coffees
let revenue = coffeesSold.reduce(function (sum, currItem) {
  console.log("Current presum: ", sum);
  return sum + currItem.price;
}, 0);
console.log("Revenue made: ", revenue);
