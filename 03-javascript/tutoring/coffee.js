let coffees = [
  {name: "Cappucchino", price: 1.50},
  {name: "Café latte", price: 1.70},
  {name: "Americano", price: 1.20},
  {name: "Irish Coffee", price: 2.50}
]


// let coffeeObject = coffees[2]; // Americano coffee object
// let coffeeName = coffeeObject.name; // "Americano"
// let coffeePrice = coffeeObject.price;

// console.log(coffeeObject);
// console.log(coffeeName);
// console.log(coffeePrice);


let coffeeReturned = getMeThisFuckingCoffeeRightNowPlease("Americano", 2);

console.log(coffeeReturned);


function getMeThisFuckingCoffeeRightNowPlease(coffeeName, amount) {

  console.log("Arguments:", coffeeName, amount);

  let coffeeFound;

  for(let i=0; i < coffees.length; i++) {
    
    // check if the provided coffee name is equal to the current coffee name
    if(coffeeName == coffees[i].name) {
      coffeeFound = coffees[i];
    }
  }

  // check if the coffee was NOT found in our list => reject the order
  if(coffeeFound === undefined) {    
    console.log("Your coffee does not exist. Try again")
  }
  // this coffee exists
  // now lets check if the amount is sufficient to buy this stuff
  else if(amount >= coffeeFound.price) {
    console.log("Here is your stuff, the money is enough");
    return coffeeFound;
  }

}