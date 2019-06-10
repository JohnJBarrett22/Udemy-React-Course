// const square = function (x) {
//     return x * x;
// }

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x;
// // }

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4))

const fullName = 'John Barrett';
let firstName;

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
console.log(getFirstName(fullName));

const getFirstName2 = (fullName) => fullName.split(' ')[0];
console.log(getFirstName2(fullName))