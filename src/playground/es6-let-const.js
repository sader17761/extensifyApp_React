var nameVar = 'Corey';
nameVar = 'Mike';
console.log('nameVar: ', nameVar);

let nameLet = 'Jen';
// can not do...let nameLet = 'Julie';
nameLet = 'Julie'
console.log('nameLet: ', nameLet);

const nameConst = 'Frank';
// can not do...const nameConst = 'Gunther';
// or nameConst = 'Gunther';
console.log('nameConst: ', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

getPetName();


//block scoping with VAR
// var fullName = 'Corey Sader';

// if(fullName) {
//     var firstName = fullName.split(' ')[0];
//     console.log(firstName);
// }

// console.log(firstName);


//block scoping with CONST or LET
var fullName = 'Drew Sader';

if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);