// Arrays -----
// An Array is an object type designed for storing data collections.
// Key characteristics of JavaScript arrays are:
// Elements: An array is a list of values, known as elements.
// Ordered: Array elements are ordered based on their index.
// Zero indexed: The first element is at index 0, the second at index 1, and so on.
// Dynamic size: Arrays can grow or shrink as elements are added or removed.
// Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).

// syntax -> const array_name = [item1, item2, ...]
// declare array with const keyword
const cars = ["saab", "volvo", "bmw"]; // create a js array
console.log(cars);

const bikes = []; // create an empty array
bikes[0] = "yamaha";
bikes[1] = "honda";
bikes[2] = "royal enfield";

console.log(bikes);

const company = new Array("google", "meta", "microsoft");
console.log(company);

// Accessing array elements ---- Array indexes start with 0.
let carIndex = cars[0];
console.log(`The first car is '${carIndex}'`);

// Changing an array element ---
company[0] = "jp morgan";
console.log(company);

// Converting an array to string ---
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// Arrays are Objects ----------
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// But, JavaScript arrays are best described as arrays.

// Arrays use numbers to access its "elements".

const person = { firstName: "john", lastName: "doe", age: 46 };
console.log(person.firstName); //Objects use names to access its "members"

// the length property --- The length property is always one more than the highest array index.
let length = fruits.length;
console.log(length);

console.log(fruits[0]); //frist array element
console.log(fruits[fruits.length - 1]); //last array element

fruits.push("Lemon");
console.log(fruits.toString());
fruits[fruits.length] = "Papaya";
console.log(fruits.toString());
fruits[9] = "Pomogranate";
console.log(fruits);

// JS new Array()----
const points = new Array(40, 100, 420);
// const point = [60]
const point = new Array(60);
console.log(point[0]);
