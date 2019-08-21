// // // RECORD COLLECTION

// var collection = {
//     "1245": {
//         "artist": "Robert Palmer",
//         "tracks": []
//     }
// };

// // this makes a copy of the collection:
// // var collectionCopy = JSON.parse(JSON.stringify(collection));

// function updateRecords(id, prop, value) {

//     if (!value) {
//         delete collection[id][prop];
//     } else if (prop === 'tracks' && collection[id].tracks) {
//         collection[id].tracks.push(value);
//     } else if (prop === 'tracks') {
//         collection[id][prop] = [value];
//     } else {
//         collection[id][prop] = value;
//     }

//     return collection;
// }

// // or

// function updateRecords(id, prop, value) {

//     if (!value) {
//         delete collection[id][prop];
//     } else if (prop === 'tracks') {
//         collection[id][prop] = collection[id][prop] || []; // if it exists set it to itself otherwise create []
//         collection[id].tracks.push(value);
//     } else {
//         collection[id][prop] = value;
//     }

//     return collection;
// }

// updateRecords(1245, 'tracks', 'track1');
// updateRecords(1245, 'artist');
// updateRecords(1245, 'tracks');
// console.log(collection);




// // PROFILE LOOKUP

// var contacts = [{
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];

// function lookUpProfile(name, prop) {
//     for (let i = 0; i < contacts.length; i++) {
//         if (contacts[i].firstName === name && contacts[i][prop]) {
//             return contacts[i][prop];
//         } else if (contacts[i].firstName === name) {
//             return 'no such property';
//         } else {
//             return 'no such name';
//         }
//     }
// }

// console.log(lookUpProfile("Akira", "likes"));

// // or

// function lookUpProfile(name, prop) {
//     for (let i = 0; i < contacts.length; i++) {
//         if (contacts[i].firstName === name) {
//             return contacts[i][prop] || 'no such property'; // return this if it exists, otherwise return that
//         }
//     }
//     return 'no such name';
// }

// console.log(lookUpProfile("Akira", "likes"));




// // NESTED TERNARY OPERATOR

// function checkSign(num) {
//     return num === 0 ? '0' : num < 0 ? 'negative' : 'positive';
// }

// console.log(checkSign(1));
// console.log(checkSign(0));
// console.log(checkSign(-1));






// // return the square of the positive integers

// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// const squareList = (arr) => {
//     "use strict";
//     const squaredIntegers = arr.filter(n => n > 0 && n % parseInt(n) == 0).map(n => n * n);
//     return squaredIntegers;
// };

// // test your code
// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

// // n % parseInt(n) == 0 is the same as: Number.isInteger(n) they both filter integers




// DEFAULT PARAMETERS

// const sum = function (a, b = 1) {
//     return a + b;
// }
// console.log(sum(5, 3));
// console.log(sum(5));



// REST OPERATOR

// const sum = (function() {
//     "use strict";
//     return function sum(x, y, z) {
//       const args = [ x, y, z ];
//       return args.reduce((a, b) => a + b, 0);
//     };
//   })();
//   console.log(sum(1, 2, 3)); // 6

// const sum = (function () { // why nested func?
//     "use strict";
//     return function sum(...args) { // can pass any n of items which will go into arr called args
//         return args.reduce((a, b) => a + b, 0); // a = total, b = arr item
//     };
// })();
// console.log(sum(1, 2, 3)); // 6



// SPREAD OPERATOR
// copy array or obj content

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// (function() {
//   "use strict";
//   arr2 = arr1; // they are now the same arr 
//   arr1[0] = 'something'
// })();
// console.log(arr2); // [something,FEB,MAR,APR,MAY] arr2 changed cause they're the same arr

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// (function() {
//   "use strict";
//   arr2 = [...arr1]; // makes arr2 = the content of arr1 so they're not the same arr
//   arr1[0] = 'something'
// })();
// console.log(arr2); // ['JAN', 'FEB', 'MAR', 'APR', 'MAY']

// let obj1 = { a: 1 }
// let obj2 = { ...obj1 }

// good to use instead of concat
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [...arr1, ...arr2];
// arr3



// DESTRUCTURING

// const obj = { a: 1, b: 2};
// const { a, b } = obj;
// a // 1
// b // 2

// const obj = { a: 1, b: 2 };
// const { a: x, b: y } = obj; // assign to some other vars: a to x and b to y
// x // 1
// y // 2


// const AVG_TEMPERATURES = {
//     today: 77.5,
//     tomorrow: 79
// };

// function getTempOfTmrw(avgTemperatures) {
//     "use strict";
//     const tempOfTomorrow = avgTemperatures.tomorrow; // old way to do it
//     return tempOfTomorrow;
// }

// console.log(getTempOfTmrw(AVG_TEMPERATURES)); // 79


// function getTempOfTmrw(avgTemperatures) {
//     "use strict";
//     const { tomorrow: tempOfTomorrow } = avgTemperatures; // using destructuring
//     return tempOfTomorrow;
// }

// console.log(getTempOfTmrw(AVG_TEMPERATURES)); // 79




// DESTRUCTURING NESTED OBJECTS

// const LOCAL_FORECAST = {
//     today: { min: 72, max: 83 },
//     tomorrow: { min: 73.3, max: 84.6 }
//   };

//   function getMaxOfTmrw(forecast) {
//     "use strict";
//     // change code below this line
//     const maxOfTomorrow = undefined; // change this line
//     // change code above this line
//     return maxOfTomorrow;
//   }

//   console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6


// const LOCAL_FORECAST = {
//     today: { min: 72, max: 83 },
//     tomorrow: { min: 73.3, max: 84.6 }
//   };

//   function getMaxOfTmrw(forecast) {
//     "use strict";
//     // change code below this line
//     const { tomorrow: {max: maxOfTomorrow}} = forecast; // change this line
//     // change code above this line
//     return maxOfTomorrow;
//   }

//   console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6




// DESTRUCTURING ARRAYS

// let arr = [1, 2, 3, 4, 5];
// let [one, two] = arr;
// one
// two


// default value

// let arr = [1, 2];
// let [one, two, three = 3] = arr;
// one
// two
// three


// pick items at different indexes

// const [a, b, , c] = [1, 2, 3, 4];
// a // 1
// b // 2
// c // 4


// reverse order

// let a = 8, b = 6;
// (() => {
// [a, b] = [b, a];
// })();
// console.log(a); // should be 6
// console.log(b); // should be 8




// Use Destructuring Assignment with the Rest Operator to Reassign Array Elements

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function removeFirstTwo(list) {
//     const [, , ...arr] = list;
//     return arr;
// }
// console.log(removeFirstTwo(source));




// Use Destructuring Assignment to Pass an Object as a Function's Parameters

// let person = {name: 'John', age: 33, city: 'Berlin'};

// function myFunc({name, city}) {
//     return name + '-' + city
// }
// console.log(myFunc(person)); // John-Berlin

// arrow function:

// let person = {name: 'John', age: 33, city: 'Berlin'};
// let myFunc = ({name, city}) => name + '-' + city
// console.log(myFunc(person)); // John-Berlin

// with default value:

// let person = {name: 'John', age: 33, city: 'Berlin'};
// let myFunc = ({name, city, gender = 'unknown'}) => name + '-' + city + '-' + gender
// console.log(myFunc(person)); // John-Berlin




// Create Strings using Template Literals
// create multi-line strings and can use string interpolation

// const person = {
//     name: "Zodiac Hasbro",
//     age: 56
//   };

//   // Template literal with multi-line and string interpolation
//   const greeting = `Hello, my name is ${person.name}!
//   I am ${person.age} years old.`;

//   console.log(greeting); // prints
//   // Hello, my name is Zodiac Hasbro!
//   // I am 56 years old.




// Write Concise Object Literal Declarations Using Simple Fields

// instead of this

// let passValues = (name, age) => {
//     return { name: name, age: age };
// }
// console.log(passValues('jo', 22));

// we can use this

// let passValues = (name, age) => ({ name, age });
// console.log(passValues('jo', 22));




// Write Concise Declarative Functions

// instead of this
// const bicycle = {
//     gear: 2,
//     setGear: function (newGear) {
//         "use strict";
//         this.gear = newGear;
//     }
// };
// bicycle.setGear(3);
// console.log(bicycle.gear);

// we can use this

// const bicycle = {
//     gear: 2,
//     setGear(newGear) {
//         "use strict";
//         this.gear = newGear;
//     }
// };
// bicycle.setGear(3);
// console.log(bicycle.gear);




// OBJECT LITERAL

// let bubble = {
//     x: 10,
//     y: 5,
//     move: function() {
//         return 'bubble is moving';
//     }
// }
// console.log(bubble.x);
// console.log(bubble.move());

// we can omit 'function'

// let bubble = {
//     x: 10,
//     y: 5,
//     move() {
//         return 'bubble is moving';
//     }
// }
// console.log(bubble.x);
// console.log(bubble.move());


// we can bring in a property from outside

// let x = 3;
// let bubble = {
//     x,
//     y: 5,
//     move() {
//         return 'bubble is moving';
//     }
// }
// console.log(bubble.x);
// console.log(bubble.move());



// CONSTRUCTOR FUNCTIONS

// 'this' is the object that will be created with 'new Bubble()'

// function Bubble() {
//     this.x = 10;
//     this.y = 5;
//     this.move = function() {
//         return 'bubble is moving';
//     }
//     // return this (no need to return the object created, it's implicit)
// }

// let bubble = new Bubble();
// console.log(bubble.x);
// console.log(bubble.move());


// CLASS

// the same thing can be written with a class

// class Bubble {
//     constructor() {
//         this.x = 10;
//         this.y = 5;
//         this.move = function () {
//             return 'bubble is moving';
//         }
//     }
// }

// let bubble = new Bubble();
// console.log(bubble.x);
// console.log(bubble.move());

// // put 4 bubbles in an array

// let bubbles = []
// for (i=0; i<4; i++) {
//     bubbles[i] = new Bubble(); // no need to 'push' cause we're setting the index
// }
// console.log(bubbles);


// CONSTRUCT WITH PARAMETERS

// function Car(color) {
//     this.color = color;
// }
// let car = new Car('red');
// console.log(car.color);

// class Car {
//     constructor(color) {
//         this.color = color;
//     }
// }
// let car = new Car('red');
// console.log(car.color);




// FACTORY FUNCTION

// function createCar(color) {
//     return {
//         color,
//         move() {
//             return 'car is moving'
//         }
//     }
// }
// let car = createCar('red');
// console.log(car.color);


// function createCar() {
//     return {
//         color: 'blue',
//         move() {
//             return 'car is moving'
//         }
//     }
// }
// let car = createCar();
// console.log(car.color);




// GETTERS AND SETTERS

// treat functions like properties

// object literal

// let person = {
//     firstName: 'john',
//     lastName: 'smith',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`; // this and person both work
//     },
//     set fullName(value) {
//         let parts = value.split(' ');
//         this.firstName = parts[0]; // this and person both work
//         this.lastName = parts[1];
//     }
// };
// console.log(person.fullName); // this is the return of fullName get function
// person.fullName = 'mike capes'; // this goes into 'value'
// console.log(person.firstName);
// console.log(person.lastName);


// class

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set fullName(value) {
//         let parts = value.split(' ');
//         this.firstName = parts[0]; // this and person both work
//         this.lastName = parts[1];
//     }
// }
// let person = new Person('jo', 'be');
// console.log(person);
// console.log(person.fullName);
// person.fullName = 'te la';
// console.log(person);
















//////////////////////////


// ARRAY DELETE / ADD ITEMS AT INDEX

// let arr = [1, 2, 3];
// let deletedItems = arr.splice(0, 3, 5, 6, 7);
// arr // [5, 6, 7]
// deletedItems // [1, 2, 3]





