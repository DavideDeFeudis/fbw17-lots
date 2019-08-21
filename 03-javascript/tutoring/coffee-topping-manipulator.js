let coffees = [
  { name: "Cappucchino", price: 1.50,  toppings: ['caramel', 'cream'] },
  { name: "Café latte", price: 1.70, toppings: ['cream'] },
  { name: "Americano", price: 1.20, toppings: ['choco'] },
  { name: "Americano", price: 1.20, toppings: ['choco'] }
];

console.log(coffees);
console.log(); // produce an empty line

// add a new topping to our second coffee (Café latte)
coffees[1].toppings.push('caramel');
// remove  topping from our first coffee  
coffees[0].toppings.pop(); // pop away "cream"

console.log(coffees);
console.log();

// filter for americanos
let americanos = coffees.filter(function(currentItem) {
  return currentItem.name == "Americano" // if the current 
    // item has the name americano, we want to include it in our
    // result / filtered array
})
console.log(americanos);
console.log();

// manipulate every single americano in the array 
// => remove their topping from the toppings sub array
let americanosWithoutToppings =  
  americanos.map(function(currentItem) {
    currentItem.toppings.pop(); // pop away the topping
    return currentItem;  // return the manipulated item.
      // this one will be included in our result array
  });

console.log(americanosWithoutToppings);
