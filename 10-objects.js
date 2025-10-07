// An Object is a variable that can hold many variables.

// Objects are collections of key-value pairs, where each key (known as property names) has a value.

// Objects can describe anything like houses, cars, people, animals, or any other subjects.

const cars = { type: "Fiat", model: "500", color: "white" };

const person = {
  firstName: "ankita",
  lastName: "thorve",
  age: 18,
  eyeColor: "brown",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());

// create an object
const game = {};
// add properties
game.name = "cricket";
game.country = "india";
game.playerCount = 11;

console.log(game);

// using the new keyword---
const employee = new Object({
  empName: "john",
  empId: 101,
  empDept: "dev",
});

// Object Properties ---
// objectName.propertyname
// objectName["propertyName"]

console.log(employee.empId);

// displaying JS Objects ---
let empDetail = employee;
console.log(empDetail);

// displaying object properties ---
let detail = employee.empName + "," + employee.empId + "," + employee.empDept;
console.log(detail);

// Object Contructor Function ---
function family(first, last, eye, age) {
  this.firstName = first;
  this.lastName = last;
  this.eyeColor = eye;
  this.age = age;
}

const dad = new family("pappa", "thorve", "brown", 68);
const mom = new family("aai", "thorve", "brown", 58);
console.log("My father's name is " + dad.firstName + " " + dad.lastName);
console.log("My father is " + dad.age + ". My mother is " + mom.age);


// Summary-----------------------------------------
// Objects are containers for Properties and Methods.
// Properties are named Values.
// Methods are Functions stored as Properties.
// Properties can be primitive values, functions, or even other objects.
// Constructors are Object Prototypes.

// JavaScript Primitives
// A primitive data type is data type that can only store a single primitive value.
// string, number, boolean, bigint, null, undefined, symbol
