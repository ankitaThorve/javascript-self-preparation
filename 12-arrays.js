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
console.log(company)

// Accessing array elements ---- Array indexes start with 0.
let carIndex = cars[0]
console.log(`The first car is '${carIndex}'`)

