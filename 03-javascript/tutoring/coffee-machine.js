let coffees = [
   { name: "Café latte", price: 1.50 },
   { name: "Americano", price: 2.00 },
   { name: "Latte macchiato", price: 2.50 },
]

let coffeesBought = []

function buyCoffee(coffeeName) {

  let foundCoffee = coffees.filter(function(currentItem) {
    return coffeeName == currentItem.name
  });
  // console.log(foundCoffee);
  coffeesBought.push(foundCoffee[0]);
  return foundCoffee;
}

console.log(coffeesBought);

buyCoffee("Latte macchiato");
buyCoffee("Americano");
buyCoffee("Americano");
buyCoffee("Americano");
buyCoffee("Latte macchiato");

console.log(coffeesBought);
console.log();

/**
 * This method shows the revenue for a certain coffee category (by the name provided)
=> use filter method to get all coffees with a certain name
=> use reduce to sum up all prices and return the total revenue
=> print out the revenue to the console
 */
function showCoffeeRevenue(coffeeName) {

  let filteredCoffees;
  
  filteredCoffees = coffeesBought.filter(function(currentCoffee) {
    return coffeeName == currentCoffee.name;
  })
  console.log(filteredCoffees);

  let totalRevenue = filteredCoffees.reduce(function(sum, currentCoffee) {
    return sum + currentCoffee.price;
  }, 0);
  
  console.log("My revenue for " + coffeeName + " is: " + totalRevenue);
}
showCoffeeRevenue("Americano");