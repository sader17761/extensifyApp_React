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

// creates an instance of the Person class called me
const me = new Person('Corey Sader', 43);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());