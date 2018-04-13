console.log('person.js is running.');

const isAdult = ( age ) => {
    if( age >= 18 ) {
        return true;
    } else {
        return false;
    }
}

const canDrink = ( age ) => {
    if( age >= 21 ) {
        return true;
    } else {
        return false;
    }
}

const isSenior = (age) => {
    if( age >= 65 ) {
        return true;
    } else {
        return false;
    }
}


export { isAdult, canDrink, isSenior as default };