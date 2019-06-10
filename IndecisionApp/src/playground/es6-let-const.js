var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar: ', nameVar);
//Can reassign and refine with var.

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet: ', nameLet);
//Can reassign it, but can not redefine let.

const nameConst = 'Frank';
console.log('nameConst: ', nameConst);
//Can not reassign or redefine const.


//Block Scoping
const fullName = 'John Barrett';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}
console.log(firstName)