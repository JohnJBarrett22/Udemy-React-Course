'use strict';

// const square = function (x) {
//     return x * x;
// }

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x;
// // }

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4))

var fullName = 'John Barrett';
var firstName = void 0;

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};
console.log(getFirstName(fullName));

var getFirstName2 = function getFirstName2(fullName) {
    return fullName.split(' ')[0];
};
console.log(getFirstName2(fullName));
