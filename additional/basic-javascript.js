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

let person1 = ['john', 30, 'berlin', 'married'];
let person2 = ['jack', 31, 'rome'];
let person3 = ['jim', 32, 'paris'];
let arr = [person1, person2, person3];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}