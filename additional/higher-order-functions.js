// Write a function to determine the average age and weight of the group
// const people = [{
//         name: "Rene",
//         age: 33,
//         weight: 110
//     },
//     {
//         name: "Claire",
//         age: 27,
//         weight: 65
//     },
//     {
//         name: "Tom",
//         age: 19,
//         weight: 75
//     },
//     {
//         name: "Henry",
//         age: 40,
//         weight: 120
//     },
//     {
//         name: "Kate",
//         age: 44,
//         weight: 50
//     }
// ];

// function calculateAverage(array, key) {
//     let sum = 0;
//     array.forEach(element => {
//         sum += element[key]; // bracket notation to pass argument
//     });
//     let average = sum / array.length
//     console.log(average);
// }

// calculateAverage(people, "age"); 
// calculateAverage(people, "weight");
// key must be in quotes, it's not a var






// ANOTHER WAY TO WRITE FOR LOOP

// const numbers = [1, 2, 3];

// let sum = 0;
// for (let n of numbers) {
//     sum += n;
// }
// console.log(sum);




// REDUCE ARRAY ELEMENTS INTO A SINGLE VALUE

// const numbers = [1, 2, 3];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum);

// // optionally we can set the acc initial value as second arg

// const numbers = [1, 2, 3];
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 4);
// console.log(sum);





// FILTER
// returns a new array, doesn't modify the original array


// ex: return positive numbers

// const numbers = [-1, 0, 1, 2, 3];
// const filtered = numbers.filter(function(value) {
//     return value >= 0;
// });
// console.log(filtered);
// value represents each item in the array

// shorter version

// const numbers = [-1, 0, 1, 2, 3];
// const filtered = numbers.filter(n => n >= 0);
// console.log(filtered);
// n represents each item in the array


// remove contains red

// const colors = ["Red", "Green", "Blue", "Yellow", "Red", "Green Red"];
// const filtered = colors.filter(color => !color.includes("Red"));
// filtered




// FILTER OBJECTS

// Write a function to create a new array from people. The new array must be filtered by a given age range (e.g 0 - 40)

// const people = [{
//         name: "Rene",
//         age: 33,
//         weight: 110
//     },
//     {
//         name: "Claire",
//         age: 27,
//         weight: 65
//     },
//     {
//         name: "Tom",
//         age: 19,
//         weight: 75
//     },
//     {
//         name: "Henry",
//         age: 40,
//         weight: 120
//     },
//     {
//         name: "Kate",
//         age: 44,
//         weight: 50
//     }
// ];

// const filteredPeople = people.filter(person => person.age <= 40);
// console.log(filteredPeople);
// person represents each item in the array




// MAP
// returns a new array, doesn't modify the original array
// .forEach() operates on original array and .map() on the new one.


// multiply array elements by 2

// var arr = [1, 2, 3];
// arr.map(n => n * 2);
// arr
// this doesn't work because map doesn't change the original array
// we have to store the function in a new var or re-assign to the original arr
// var arr = [1, 2, 3];
// arr = arr.map(n => n * 2);
// arr





// output an array of objects: {value: -1} ...

// const numbers = [-1, 0, 1, 2, 3];
// const objects = numbers.map(function(n) {
//     return {value: n};
// });
// console.log(objects);

// n represents each item in the array

// short form:

// const numbers = [-1, 0, 1, 2, 3];
// const objects = numbers.map(n => ({value: n}));
// console.log(objects);

// object in arrow func must be enclosed in (): ({value: n})


// use map without using return

// let arr = [1, 2];
// let newArr = [];
// arr.map(n => {
//     newArr.push(n*2);
// });
// newArr



// CHAIN FILTER AND MAP METHODS

// output an array of objects: {value: -1} ...
// only if value > 0

// const numbers = [-1, 0, 1, 2, 3];

// const items = numbers
//     .filter(n => n > 0)
//     .map(n => ({
//         value: n
//     }));

// console.log(items);





// output an array that contains all the values of the objects

// const objects = [{value: 1}, {value: 2}];

// const values = objects.map(obj => obj.value);

// values

// enable quokka to view value directly in editor (ctrl shift p)




// Write a function to compare both groups by age and return each pair with same age as a String (e.G Rene - Fred (age: 33))

// const groupA = [{
//         name: "Rene",
//         age: 33,
//         weight: 110
//     },
//     {
//         name: "Claire",
//         age: 27,
//         weight: 65
//     },
//     {
//         name: "Tom",
//         age: 19,
//         weight: 75
//     },
//     {
//         name: "Henry",
//         age: 40,
//         weight: 120
//     },
//     {
//         name: "Kate",
//         age: 44,
//         weight: 50
//     }
// ];

// const groupB = [{
//         name: "Fred",
//         age: 33,
//         weight: 110
//     },
//     {
//         name: "Ben",
//         age: 27,
//         weight: 99
//     },
//     {
//         name: "Anna",
//         age: 69,
//         weight: 75
//     },
//     {
//         name: "Ralph",
//         age: 44,
//         weight: 58
//     },
//     {
//         name: "Harry",
//         age: 41,
//         weight: 120
//     }
// ];


// groupA.forEach(objA => {
//     groupB.forEach(objB => {
//         if (objA.age === objB.age) {
//             console.log(objA.name + '-' + objB.name + ' (age: ' + objA.age + ')');
//         }
//     });
// });

// or with for loops:

// for (i = 0; i < groupA.length; i++) {
//     for (j = 0; j < groupB.length; j++) {
//         if (groupA[i].age === groupB[j].age) {
//             console.log(groupA[i].name + '-' + groupB[j].name + ' (age: ' + groupA[i].age + ')');
//         }
//     }
// }







// const companies = [
//     {name: 'company 1', start: 1981},
//     {name: 'company 2', start: 1984},
//     {name: 'company 3', start: 1988}
// ];

// const filteredByStart = companies.filter(company => company.start >= 1984);
// filteredByStart

// const arrayOfNames = companies.map(company => company.name);
// arrayOfNames

// const arrayOfNamesAndDates = companies.map(company => `${company.name} [${company.start}]`);

// arrayOfNamesAndDates



// SORT
// sorts the original array, doesn't create a new one

// const arr = ['a', 'ccc', 'b', 'aa', 'bb', 'cc'];
// arr.sort((a, b) => a.length - b.length);
// arr.sort();
// arr

// const objects = [{
//     x: 5,
//     y: 1
// }, {
//     x: 1,
//     y: 7
// }, {
//     x: 3,
//     y: 2
// }];

// objects.sort((a, b) => a.x - b.x);
// objects


// FILL
// modifies the original array





// create an arr of 10 random nr

// use for:
// let arr = [];
// for (i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 10));
// }

// use fill and map:
// let arr = new Array(10); 
// arr = arr.fill().map(n => Math.floor(Math.random() * 10));

// create new arr with 10 empty spots
// first fill with undefined, then assign a random nr to each item
// can be shortened:

// let arr = new Array(10).fill().map(n => Math.floor(Math.random() * 10));
// let arr = Array(10).fill(0).map(n => Math.floor(Math.random() * 10));
// let arr = Array(10).fill().map(n => Math.floor(Math.random() * 10));

// if we just need one func i.e. if we don't need to use floor we can just put a named func in there (without calling it). instead of creating a func that returns another func and omit the arg:
// let arr = Array(10).fill().map(Math.random);





// MAP VS FOR EACH
// forEach is like map but doesn't return a value. It can modify the original arr.

// modify original array

// const numbers = [1, 2];
// numbers.forEach( (n, index, arr) => arr[index] = n * 2);
// numbers

// const numbers = [1, 2];
// numbers.forEach( (n, index) => numbers[index] = n * 2);
// numbers


// output new array

// const numbers = [1, 2];
// const newArr = numbers.map(n => n * 2);
// newArr




// REDUCE

// const prices1 = [10, 20, 30, 40, 40, 60];
// const totalPrices1 = prices1.reduce((total, n) => total + n);
// totalPrices1




// CONCATENATE

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2);
// arr3




// CARS

// const cars = [{
//     name: "Mercedes",
//     color: "Grey",
//     age: 2,
//     price: 90000
// },
// {
//     name: "Opel",
//     color: "Green",
//     age: 1,
//     price: 40000
// },
// {
//     name: "VW",
//     color: "Yellow",
//     age: 15,
//     price: 30000
// },
// {
//     name: "Audi",
//     color: "Blue",
//     age: 3,
//     price: 60000
// },
// {
//     name: "Citroen",
//     color: "Pink",
//     age: 11,
//     price: 40000
// },
// {
//     name: "Jaguar",
//     color: "Orange",
//     age: 5,
//     price: 80000
// },
// {
//     name: "Ferrari",
//     color: "Red",
//     age: 6,
//     price: 500000
// }
// ];


// //1. 20% discount on vehicles older than 10 years

// cars.forEach(car => {
// if (car.price > 10) {
//     car.price = car.price * 0.8;
// }
// });


// //2. Sort by price

// cars.sort((a, b) => a.price - b.price)


// //3. Repaint pink cars to red

// cars.forEach(car => {
// if (car.color === 'Pink') {
//     car.color = 'Red';
// }
// });


// //4. Total value of all cars

// let totalValue = cars.reduce((total, car) => { return total + car.price }, 0);
// total must be initialized to 0

// // or in 2 steps:

// // let prices = [];
// // cars.forEach(car => {
// //     prices.push(car.price);
// // });
// // let totalValue = prices.reduce((total, price) => total + price);

// console.log(totalValue);


















///////////////////////////////////////////




// let students = [
//     { name: 'Rob1', interests: ['coding', 'entrepreneurship' ] },
//     { name: 'Rob2', interests: ['football', 'ping pong', ] },
//     { name: 'Rob3', interests: ['piano', 'reading', 'laziness' ] },
//     { name: 'Naima', interests: [] },
//     { name: 'Balazs', interests: [] },
//     { name: 'Christophe', interests: [] },
// ];

// let modifiedStudents = students.map(student => {
//     if (student.interests.length === 0) {
//         student.interests = ['coding'];
//     }
//     return student;
// });

// console.log(modifiedStudents);





// let students = [
//     { name: 'Rob1', interests: ['coding', 'entrepreneurship' ] },
//     { name: 'Rob2', interests: ['football', 'ping pong', ] },
//     { name: 'Rob3', interests: ['piano', 'reading', 'laziness' ] },
//     { name: 'Naima', interests: [] },
//     { name: 'Balazs', interests: [] },
//     { name: 'Christophe', interests: [] },
// ];

// let filteredStudents = students
// .filter(student => student.interests.length === 0)
// .filter(student => student.interests = ['coding']); // use filter to update

// console.log(filteredStudents);
// console.log(students); // it updates the original array




// let students = [
//     { name: 'Rob1', interests: ['coding', 'entrepreneurship' ] },
//     { name: 'Rob2', interests: ['football', 'ping pong', ] },
//     { name: 'Rob3', interests: ['piano', 'reading', 'laziness' ] },
//     { name: 'Naima', interests: [] },
//     { name: 'Balazs', interests: [] },
//     { name: 'Christophe', interests: [] },
// ];

// let filteredStudents = students
// .filter(student => student.interests.length === 0)
// .map(student => {
//     student.interests = ['coding'];
//     return student;
// });

// console.log(filteredStudents);





// let students = [
//     { name: 'Rob1', interests: ['coding', 'entrepreneurship' ] },
//     { name: 'Rob2', interests: ['football', 'ping pong', ] },
//     { name: 'Rob3', interests: ['piano', 'reading', 'laziness' ] },
//     { name: 'Naima', interests: [] },
//     { name: 'Balazs', interests: [] },
//     { name: 'Christophe', interests: [] },
// ];

// students.forEach(student => {
//     if (student.interests.length === 0) {
//         student.interests = ['coding'];
//     }
// });

// console.log(students);




// SPREAD OPERATOR - ARRAYS AND OBJECTS

// let students1 = [
//     { name: 'Rob1', interests: ['entrepreneurship' ] },
//     { name: 'Naima', interests: [] },
// ];

// let students2 = [...students1];

// students1[0].name = 'adadf' // affects both even though we used spread

// console.log(students1);
// console.log(students2);
