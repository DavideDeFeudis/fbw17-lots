let array = [
  { name: "Café latte", price: 1.50 },
  { name: "Americano", price: 2.00 },
  { name: "Latte macchiato", price: 2.50 },
]

// FOR loop
for(let i=0; i<array.length; i++) {
  array[i] // currentItem
}

// ARRAY FUNCTION (filter, map, reduce)
// => this is equal to the for loop above. We just access the current 
// item not by its index. We have it in the variable "currentItem"
array.filter(function(currentItem) {
  currentItem // = array[i]
});
