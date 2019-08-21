let coffees = [
  { name: "Café latte", price: 1.50 },
  { name: "Americano", price: 2.00 },
  { name: "Latte macchiato", price: 2.50 },
]

// convert array items into HTML list tags
let listItems = coffees.map(function(currentItem) {
  return "<li>" + currentItem.name + "</li>" 
});

let htmlList = "<ul>"; // build up a HTML list string
htmlList += listItems.join(""); // collapse the list array 
  // into a string and add them to the list
htmlList += "</ul>"; // close the list

console.log(htmlList);
