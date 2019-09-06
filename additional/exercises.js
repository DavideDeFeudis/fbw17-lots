// function flatten(arr) {
//     return [].concat(...arr) 
// }

// console.log(flatten([[1, 2], [3, 4]]))
// console.log([].concat(...[[1, 2], [3, 4]]));
// console.log(...[[1, 2], [3, 4]]);


// let arr = [[1, 2], [3, 4]]
// let arr2 = [];
// console.log(arr2.concat(arr))
// arr2 

// let output = arr.reduce((acc, item) => {
//     return acc.concat(item)
// }, []);
// console.log(output) 

// let output = arr.reduce((acc, n) => {
//     return acc+n;
// }, 0) 




// function progressDays(runs) {
//     // use filter
// }

// console.log(progressDays([3, 4, 1, 2])) //2



// removeDups([1, 0, 1, 0]) ➞ [1, 0]
// solve with filter and indexOf
// solve with new Set
// let arr = ["John", "Taylor", "John", 1, 2, 1, 1, 10]







// solve with some()

// console.log(inBox([
//     "###",
//     "#*#",
//     "###"
// ]))

// function inBox(arr) {
// }







// solve with object, hasOwnProperty

// console.log(hackerSpeak("javascript is cool"))

// function hackerSpeak(str) {
// }









// indexOf

// console.log(missingNum([7, 2, 3, 6, 1, 10, 4, 8, 5]))

// function missingNum(arr) {
// }











// equal(3, 4, 3) ➞ 2
// equal(1, 1, 1) ➞ 3
// equal(3, 4, 1) ➞ 0

// console.log(equal(3, 4, 3))
// console.log(equal(1, 1, 1) )
// console.log(equal(11, 1, 1, 1, 3, 4, 1, 1))

// function equal(...args) {
// }

// function equal(a, b, c) {
//     const size = (new Set([a, b, c])).size;
//     size 
//     let d = (new Set([a, b, c]));
//     console.log((new Set([a, b, c])))
// 	return size === 3 ? 0 : 4 - size;
// }

// const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32];
// console.log([...new Set(numbers)]);




// const set1 = new Set();
// set1
// var object1 = new Object();
// object1

// set1.add(42);
// set1.add('forty two');
// set1.add('forty two');
// set1.add(object1);

// console.log(set1.size);
// expected output: 3


// let arr = ['a', 'a', 1, 2, 3, '3'];
// let arr2 = [...new Set(arr)];
// arr2 

// let arr = ['a', 'a', 1, 2, 3, 3];
// let obj = new Set(arr);
// obj  


// formatNum(1000) ➞ "1,000"
// formatNum(100000) ➞ "100,000"
// formatNum(20) ➞ "20"

// console.log(formatNum(1000) )
// console.log(formatNum(1000000))
// console.log(formatNum(20))

// function formatNum(num) {
//     let str = String(num);
//     let arr = str.split('').reverse(); 
//     if (arr.length > 3) arr.splice(3, 0, ',');
//     if (arr.length > 7) arr.splice(7, 0, ',');
//     return arr.reverse().join('');
// }






// getMiddle("test") ➞ "es"
// getMiddle("testing") ➞ "t"
// getMiddle("middle") ➞ "dd"
// getMiddle("A") ➞ "A"


// 0123 4 > 4-5, 4-5
// 4/2=2-1=1
// 1+2 = 3

// 012345 > 2,4
// 6/2=3-1
// 2+2


// 012 - 1 - 3/2=
// 01234 - 4/2=2

// function getMiddle(str) {
//     return (str.length % 2) ? str[(str.length - 1) / 2] : str.substr((str.length - 2) / 2 , 2);
// }


// console.log(getMiddle("0123"))