// Person constructor
// function Person(name, dob) {
//   this.name = name;
// //   this.age = age;
//   this.birthday = new Date(dob);
//   this.claculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }


// // const john = new Person('John', 30);
// // console.log(john);

// const brad = new Person('bard', '9-10-1981');
// console.log(brad.claculateAge());

//-------- 5.2 --------
// new on Primitives

// //String
// const name1 = 'Jeff';
// const name2 = new String('Jeff');
// console.log(name1);
// console.log(name2);

// console.log(typeof name1); //string
// console.log(typeof name2); //Object

// if (name1 ==='Jeff') {
//     console.log('Yes');
// } else {
//     console.log('No');
// }
// if (name2 ==='Jeff') {
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// //Number
// const num1 = 5;
// const num2 = new Number(2);

// //Boolean

// const bool1 = true;
// const bool2 = new Boolean(true);

// //Functions

// const getSum1 = function(x, y) {
//     return x+y;
// }
// console.log(getSum1(1,1));

// const getSum2 =  new Function('x', 'y', 'return 1 +1');
// console.log(getSum1(1,1));

// //Objects
// const john = {name: "John"};
// console.log(john);
// const john2 = new Object({name: "John"});
// console.log(john2);

// // Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\w+');
// console.log(re1);
// console.log(re2);


// ----------- 5.3 ------------------
// Prototypes

//Object.prototype
//Person.prototype

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
// //   this.claculateAge = function() {
// //     const diff = Date.now() - this.birthday.getTime();
// //     const ageDate = new Date(diff);
// //     return Math.abs(ageDate.getUTCFullYear() - 1970);
// //   }
// }

// //Calculate age (ist für alle gleich und sollte deswegen in den Prototype)
// Person.prototype.claculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

// // Get Fullname
// Person.prototype.getFullName = function(){
//    return `${this.firstName} ${this.lastName}`;
// }

// //Gets Married
// Person.prototype.getsMarried = function(newLastName){
//     this.lastName = newLastName;
//  }

// const john = new Person('John', 'Doe', '8-12-90');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');




//   console.log(mary);
//   //Person.prototype
//   console.log(john.claculateAge());
//   console.log(mary.getFullName());
//   mary.getsMarried('Smith');
//   console.log(mary.getFullName());
//   //Object.prototype (Prototype für das Person object... 1 stufe höher)
//   console.log(mary.hasOwnProperty('firstName'));
//   console.log(mary.hasOwnProperty('gibtsNich'));


// ------------------- 5.3 Prototype inheritance

//Person constructor
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// Person.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

// // Customer constructor

// function Customer(firstName, lastName, phone, membership) {
//     Person.call(this, firstName, lastName);
//     this.phone = phone;
//     this.membership = membership;
// }
// //Inherit Person prototype methods
// Customer.prototype = Object.create(Person.prototype);
// //Make customer.prototype return Customer
// Customer.prototype.constructor = Customer;

// const customer1 = new Customer('Tom', 'Smith', '555', 'VIP');

// console.log(customer1);

// //Customer greeting
// Customer.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName}. Welcome to our Company`;
// }


// console.log(customer1.greeting());


// -------------------5.4 Using Object create------------------

//
// const personPrototype = {
//     greeting: function(){
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried: function(newLastName) {
//         this.lastName = newLastName;
//     }
// }

// const mary = Object.create(personPrototype);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// console.log(mary);
// console.log(mary.greeting());
// mary.getsMarried('Thompson');
// console.log(mary.greeting());

// //Object.create alternative
// const brad = Object.create(personPrototype, {
//     firstName: {value: 'Brad'},
//     lastName: {value: 'Travery'},
//     age: {value: 36}
// });

// console.log(brad);
// console.log(brad.greeting());


//------------------------- 5.5 ES6 Classes-------------------------

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }

//     greeting(){
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     }

//     calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }

//     getsMarried(newLastName) {
//         this.lastName = newLastName;
//     }

//     static addNumbers(x, y) {
//         return x + y;
//     }
// }

// const mary = new Person('Mary', 'Williams', '11-13-1980');
// console.log(mary);
// console.log(mary.greeting());
// console.log(mary.calculateAge());
// mary.getsMarried('Smith');
// console.log(mary);

// //console.log(mary.addNumbers(1,1)); ==> Error
// console.log(Person.addNumbers(1,1)); //Braucht vorher keine instanziierung über Var (const xyz = new Person...)


//---------------- 5.6 Sub Classes / Inheritance---------------

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there, ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'VIP');

console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());
