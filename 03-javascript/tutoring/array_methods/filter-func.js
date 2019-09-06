let coffees = [
    {name: "Café latte", price: 1.50},
    {name: "Americano", price: 2.00},
    {name: "Latte macchiato", price: 2.50},
  ]
  
  
  let filterArr = coffees.filter( function(item) {
      return item.price >= 2;   
  } );
  
  /*
  This function below is doing the exact same thing as the filter() function above.
  But it has far more code and is more complex. That's why we use 
  the array filter method as a shortcut, without any loops and array manipulation functions like push
  */ 
  function filter() {
    let filterArr = []
    for(let i=0; i<coffees.length; i++) {
      if(coffees[i].price >= 2) {
        filterArr.push(coffees[i]);
      }
    }
    return filterArr;
  }
  
  console.log(filterArr);
  
