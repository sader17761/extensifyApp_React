// ARROW FUNCTIONS

//es5
function square(x) {
    return x * x;
};

console.log(square(8));



//es6 - always anonymous - must be assigned to a variable
// const squareArrow = (x) => {
//     return x * x;
// };

// OR it can be written this way

// expression syntax
const squareArrow = (x) => x * x;

console.log(squareArrow(9));




// Challenge

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// };

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Wendy Sader'));







//arguments object -  no longer bound with arrow functions
const add = function (a, b) {
    console.log(arguments);  // no longer defined in arrow functions
    return a + b;
}
console.log(add(55, 1));



// this keyword - no longer bound 
const user = {
    name: 'Corey',
    cities: ['Mankato', 'Prior Lake', 'Hudson'],
    printPlacesLived() {

        // this.name won't work in this function...but it will below with the arrow function
        // this.cities.forEach(function(city) {
        //     console.log(this.name + " has lived in " + city);
        // });

        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in " + city);
        // });

        // const cityMessages = this.cities.map((city) => {
        //     return this.name + ' has lived in ' + city;
        // });
        // return cityMessages;

        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived());




// next Challenge 
const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num);
    }
}

console.log(multiplier.multiply());
