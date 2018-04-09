console.log('es6-classes-1 is up and running.');

// Car class
// make, model, vin number, getDescription()

// Person class (always has an uppercase name)
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return 'Hi, I am ' + this.name + '!';
        //es6 template strings using interpolation
        return `HI. I am ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // this just passes the data through to the parent class (Person)
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

// creates an instance of the Person class called me
const me = new Traveler('Corey Sader', 43, 'Prior Lake, MN');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());