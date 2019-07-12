// TERNARY
// let age = 17;
// let votable = (age < 18) ? 'too young' : 'old enough';
// console.log(votable)

// BREAK (exits the loop)
// var num = 0;
// while (num < 5) {
//     num++;
//     if (num == 3) {
//         break;
//     }
//     console.log(num);
// }
// returns: 12

// CONTINUE (skips a step of the loop)
// var num = 0;
// while (num < 5) {
//     num++;
//     if (num == 3) {
//         continue;
//     }
//     console.log(num);
// }
// returns: 1245




// NESTED ARRAYS AND FOR LOOPS

// print age:

// let person1 = ['john', 30, 'berlin'];
// let person2 = ['jack', 31, 'rome'];
// let person3 = ['jim', 32, 'paris'];
// let arr = [person1, person2, person3];
// for (let i=0; i<arr.length; i++) {
//     console.log(arr[i][1]);
// }


// print all:

// let person1 = ['john', 30, 'berlin', 'married'];
// let person2 = ['jack', 31, 'rome'];
// let person3 = ['jim', 32, 'paris'];
// let arr = [person1, person2, person3];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }

// print numbers between a and b unless ...

// let a = 2;
// let b = 5;

// for (let i = a; i <= b; i++) {
//     if (a > b || a < 0 || b < 0) {
//         break;
//     }
//     console.log(i);
// }

// put all conditions in the for loop: 

// for (let i = a; i <= b && a >= 0; i++) { 
//     console.log(i);
// }

// remove the starting point:

// for (; a <= b && a >= 0; a++) { 
//     console.log(a);
// }
// it modifies a. better to assign it to i.

// same with while:

// while (a >= 0 && a <= b) {
//     console.log(a);
//     a++;
// }
// it modifies a better to assign it to i:

// let i = a;
// while (i >= 0 && i <= b) {
//     console.log(i);
//     i++;
// }

// set 2 conditions in a while loop:

// let x = 3;
// let i = x;

// while (i < 6 && i > 0) {
//         console.log(`x is ${i} and it's smaller than 6`);
//     i++;
// }


// let arr = [];

// for (i = 0; i <= 10; i++) {
//     arr.push(i);
// }

// console.log(arr);



// CHRISTMAS TREE

// let str = "*";
// for (i = 1; i <= 10; i++) {
//     console.log(str.repeat(i));
// }


// another way to do it. also printing on the same line using a comma

// for (i = 1; i <= 6; i++) {
//     console.log(i, "*".repeat(i));
// }
// console.log("i is now: " + i); 
// this doesnt work if we write let i cause the scope changes


// var str = "*";
// for (i = 1; i <= 10; i++) {
//     console.log(str);
//     str = str + "*";
// }

// var str = "";
// for (i = 1; i <= 10; i++) {
//     str = str + "*";
//     console.log(str);
// }

// for (i = 0; i <= 10; i+=2) {
//     console.log(i);
// }


// var str = "";
// for (i = 0; i < 4; i++) {
//     str += "*";
//     console.log(i+1);
//     console.log(str);
// }

// SAME WITH NESTED LOOP

// var str = "";
// for (i = 0; i < 4; i++) {
//     for (j = 0; j < i + 1; j++) {
//         str += "*";
//     }
//     console.log(i + 1);
//     console.log(str);
//     str = "";
// }


// for (i = 1; i < 5; i++) {
//     let str = "";
//     for (j = 0; j < i; j++) {
//         str += "*";
//         // console.log(j);
//     }
//     // console.log(i);
//     console.log(str);
// }






// NESTED ARRAYS AND LOOPS

// let parent = [];
// let child = [];

// for (i = 0; i <= 5; i++) {
//     child.push(i);
//     for (j = 0; j <= i; j++) {
//         parent = [];
//         parent.push(child);
//     }
//     console.log(parent);
// }



// or:

// let parent = [];

// for (i = 0; i <= 5; i++) {
//     let child = [];
//     for (j = 0; j <= i; j++) {
//         child.push(j);
//     }
//     parent.push(child);
// }
// console.log(parent);



// var parent = [];
// var child = [];
// for (i = 0; i < 2; i++) {
//     child.push(i);
//     for (j = 0; j < 2; j++) {
//         parent.push(child);
//     }
// }
// console.log(parent);

// child = [0]/[0,1]
// parent = [[0],[0],[0,1],[0,1]] wrong. child is updated to [0,1] cause array is a reference type
// try with string concat, it should behave differently






// SIMILAR EXAMPLE OF ARRAY AS REFERENCE TYPE


// you push actually the original (reference) to this array, not a copy.
// This means: When you update the original array (child) the child reference in the parent array will be updated too.

// var toAdd = [0];
// var arr = [];

// arr.push(toAdd); 
// this will add the array BY REFERENCE. Any updates on array "toAdd" will change "arr" too!
// console.log(arr); 
// => [ [0] ]

// toAdd.push(1);  
// we change toAdd. This has immediate consequences for arr too
// console.log(arr); 
// => [ [0, 1] ]



// You can avoid that by creating a copy of the array before pushing it.
// The easiest way to solve that is with the spread operator:

// var toAdd = [0];
// var arr = [];

// arr.push([...toAdd]); 
// spread operator: creates a copy of the array
// console.log(arr);

// toAdd.push(1); 
// console.log(arr);







// to do: parent = [[0],[0, 1]]
// var parent = [];

// for (i = 0; i < 2; i++) {
//     var child = [];
//     child.push(i);
//     for (j = 0; j < 2; j++) {
//         parent.push(child);
//     }
// }
// console.log(parent);
// child not updated cause only scope in loop?



// output: [ [ 0 ], [ 0, 1 ], [ 0, 1, 2 ] ]














// solution
// this works cause we assign a new array to child: child = [];

// var parent = [];
// var child = [];
// for (i = 0; i < 3; i++) {
//     child = []; // same as declaring child here and not outside
//     for (j = 0; j <= i; j++) {
//         child.push(j);
//     }
//     parent.push(child);
// }
// console.log(parent);




// if instead we clear child with pop it doesn't work cause it's still the same array

// var parent = [];
// var child = [];
// for (i = 0; i < 3; i++) {
//     while (child.length > 0) {
//         child.pop();
//     }
//     for (j = 0; j <= i; j++) {
//         child.push(j);
//     }
//     parent.push(child);
// }
// console.log(parent);








// output [ [ 2, 1, 0 ], [ 1, 0 ], [ 0 ] ]
// output [ [ 0, 1, 2 ], [ 0, 1 ], [ 0 ] ]

// var parent = [];

// for (i = 0; i < 3; i++) {
//     var child = [];
//     for (j = i; j < 3; j++) {
//         child.push(j);
//     }
//     parent.push(child);
// }
// console.log(parent);



// var parent = [];
// var child = [];
// for (i = 0; i < 2; i++) {
//     for (j = 0; j < 2; j++) {
//         parent.push(child);
//     }
//     child.push(i);
// }
// console.log(parent);

// child = [0]/[0,1]
// parent = [[0],[0],[0,1],[0,1]]


// var arr = [[1,2], [3,4], [5,6]];
//  for (var i=0; i < arr.length; i++) {
//   for (var j=0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }


// https://stackoverflow.com/questions/36413159/understanding-nested-for-loops-in-javascript

// var nums = [[1,2,3], [4,5,6], [7,8,9]];

// console.log('The array data: ', JSON.stringify(nums));

// for (var i=0; i < nums.length; i++) {
//   // Main/"top" array - accessing via "arr[i]"
//   for (var j=0; j < nums[i].length; j++) {
//     // here we loop through the "child" arrays
//     let helpfulLabel = `nums[${i}][${j}]`
//     let value = nums[i][j]
//     console.log(helpfulLabel, 'Value=' + value);
//   }
// }

// var letters = [['a', 'b', 'c'], ['d', 'e', 'f'], ['x', 'y', 'z']];
// console.log('The array data: ', JSON.stringify(letters));

// for (var i=0; i < letters.length; i++) {
//   for (var j=0; j < letters[i].length; j++) {
//     let helpfulLabel = `letters[${i}][${j}]`
//     let value = letters[i][j]
//     console.log(helpfulLabel, 'Value=' + value);
//   }
// }



//Create your function below this line.
/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
bmi should equal around 20 in this case.
*/

// function bmiCalculator(weight, height) {
//     let bmi = Math.floor(weight / Math.pow(height, 2));
//     let interpretation = ""; 
//     if (bmi<18.5) {
//         interpretation = "underweight.";
//     } else if (bmi<24.9) {
//         interpretation = "normal.";
//     } else {
//         interpretation = "overweight.";
//     }
//     return "your BMI is: " + bmi + " You are " + interpretation;;
// }

// console.log(bmiCalculator(58, 1.74));





// IF ELSE CONTRACTED FORM - FIZZBUZZ

// function fizzBuzz(number) {
//     if (number % 5 === 0 && number % 3 === 0) return "fizzbuzz";
//     else if (number % 5 === 0) return "buzz";
//     else if (number % 3 === 0) return "fizz";
//     else return number;
// }

// for (let i = 1; i <= 100; i++) {
//     console.log(fizzBuzz(i));
// }



// SHORTCUTS
// 
// console.log: log tab
// ctrl shift P: open shortcuts menu






// FUNCTION SHORTHAND - ARROW FUNCTIONS

// let sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(1, 2));


// let account = {
//     balance: 1000,
//     pin: 1234
// }


// function getCash(amount, pinProvided) {

//     if (pinProvided !== account.pin) {
//         console.log("wrong pin");
//     } else if (amount > account.balance) {
//         console.log("your residual credit is euro " + account.balance);
//     } else {
//         console.log("here are your euro " + amount);
//         account.balance -= amount;
//     }

// }

// getCash(100, 15234);
// getCash(1200, 1234);
// getCash(100, 1234);
// console.log(account.balance);



let accounts = {
    john: {
        balance: 1000,
        pin: 1234
    },
    anna: {
        balance: 2000,
        pin: 5678
    }
};


let accountName = "john";
console.log(accounts.accountName.pin);

function withdraw(amount, pinProvided, accountName) {

    if (pinProvided !== accounts.accountName.pin) {
        console.log("wrong pin");
    } else if (amount > accounts.accountName.balance) {
        console.log("error: residual credit is " + accounts.accountName.balance);
    } else {
        console.log("success");
        accounts.accountName.balance -= amount;
    }

}

// withdraw(100, 15234, "john");
// withdraw(1200, 1234, "john");
// withdraw(100, 1234, "john");