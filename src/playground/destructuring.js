// console.log('Running Destructuring!');




/* ----> OBJECT DESTRUCTURING <---- */
// const person = {
//     name: 'Corey',
//     age: 43,
//     location : {
//         // city: 'Prior Lake',
//         temp: 68
//     }
// };


// Interpolation
// console.log(`${person.name} is ${person.age}`);

// ES6 Destructuring Example...on the right, the object we are trying to destructure...on the left the type (const, var, let)...inside, what we want to grab {name, age}
// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`);

// If we would like to rename a variable or set up a default...
// const {city = 'Anonymous', temp: temperature} = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// Our typical way (OLD WAY) of grabbing things (shorter to use above)...
// const name = person.name;
// const age = person.age;




/* ----> OBJ. DEST. CHALLENGE <---- */
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);





/* ----> ARRAY DESTRUCTURING <---- */
//const address = ['17761 Sunray Blvd.', 'Prior Lake', 'Minnesota', '55372'];

// will skip the first item, and we'll forget the zip by leaving it out...
//const [, city, state] = address;

// (OLD WAY) -> console.log(`You are in ${address[1]}, ${address[2]}.`);
//console.log(`You are in ${city}, ${state}.`);


/* ----> ARRAY DESTRUCTURING CHALLENGE <---- */
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

// Destructuring...
const [type, , medium] = item;

console.log(`A medium ${type} costs ${medium}`);