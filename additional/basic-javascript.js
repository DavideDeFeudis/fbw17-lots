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
// for (i = 0; i <= 10; i++) {
//     console.log(str.repeat(i));
// }


// var str = "*";
// for (i = 1; i <= 10; i++) {
//     console.log(str);
//     str = str + "*";
// }

// or:

// var str = "";
// for (i = 1; i <= 10; i++) {
//     str = str + "*";
//     console.log(str);
// }


// NESTED ARRAYS

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


// to do: parent = [[0],[0, 1]]
var parent = [];

for (i = 0; i < 2; i++) {
    var child = [];
    child.push(i);
    for (j = 0; j < 2; j++) {
        parent.push(child);
    }
}
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










var parent = [];

for (i = 0; i < 3; i++) {
    var child = [];
    for (j = i; j < 3; j++) {
        child.push(j);
    }
    parent.push(child);
}
console.log(parent);



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


