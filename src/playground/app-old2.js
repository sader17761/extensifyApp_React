// default exports are required on the outside of the brackets...or all by itself without the brackets...or by calling it anything, it doesnt' have to match the method name
// import subtract, { square, add } from './utils';

// console.log("app.js is running!");


// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 99));


// PERSON CHALLENGE (isSenior is our default method)
// import isSenior, { isAdult, canDrink } from './person';

// console.log('Are you an adult? ', isAdult(18));
// console.log('Are you old enough to drink? ', canDrink(20));
// console.log('Am I considered a senior? ', isSenior(70));


// using external 3rd party packages...first install via npm or yarn -> import - use
// yarn add validator

//import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>This is JSX from Webpack!</p>

//console.log(validator.isEmail('test@gmail.com'));

ReactDOM.render(template, document.getElementById('app'));